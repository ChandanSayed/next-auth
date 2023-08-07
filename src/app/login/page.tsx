'use client';
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function getUserValues(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center text-white">
      <h2>Sign Up</h2>
      <form action="#">
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
