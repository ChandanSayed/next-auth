'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    if (user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
      setButtonDisable(false);
    }
    return () => {
      setButtonDisable(true);
    };
  }, [user]);

  async function createUser(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/signup', user);
      console.log('Signup Success', res.data);
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center text-white">
      <h2>Sign Up</h2>
      <form action="#" className="text-black" onSubmit={createUser}>
        <div className="input-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={e => setUser({ ...user, username: e.target.value })} />
        </div>
        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={e => setUser({ ...user, email: e.target.value })} />
        </div>
        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={e => setUser({ ...user, password: e.target.value })} />
        </div>
        <button disabled={buttonDisable ? true : false} className={`btn border text-white border-gray-700`}>
          Sign Up
        </button>
      </form>
      <Link href={`/login`}>Login</Link>
    </div>
  );
}
