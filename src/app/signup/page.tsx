'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: ''
  });

  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center text-white">
      <h2>Sign Up</h2>
      <form action="#">
        <div className="input-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={e => setUser({ ...user, name: e.target.value })} />
        </div>
        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={e => setUser({ ...user, email: e.target.value })} />
        </div>
        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={e => setUser({ ...user, password: e.target.value })} />
        </div>
        <button className="btn border border-gray-700">Sign Up</button>
      </form>
      <Link href={`/login`}>Login</Link>
    </div>
  );
}
