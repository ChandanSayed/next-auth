import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { password, email } = reqBody;
    console.log(reqBody);
    //check if user already exists
    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User Doesn't Exists" }, { status: 400 });
    }
    const validatePassword = await bcryptjs.compare(password, user.password);
    if (!validatePassword) {
      return NextResponse.json({ error: 'Invalid Password' }, { status: 400 });
    }
    // create token Data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

    const response = NextResponse.json({ messages: 'Login Successful', success: true });
    response.cookies.set('token', token, {
      httpOnly: true
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
