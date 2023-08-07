'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function getUserValues(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await Axios.post('/api/users/login', user);
      console.log('Login Success', res.data);
      toast.success('Login Successful!');
      router.push('/profile');
    } catch (error: any) {
      console.log('Login Failed', error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center text-white">
      <h2>Login</h2>
      <form action="#" onSubmit={handleLogin}>
        <div className="input-control text-black">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={getUserValues} />
        </div>
        <div className="input-control text-black">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={getUserValues} />
        </div>
        <button className="btn border border-gray-700">Login</button>
      </form>
      <Link href={`/signup`}>Sign Up</Link>
    </div>
  );
}
