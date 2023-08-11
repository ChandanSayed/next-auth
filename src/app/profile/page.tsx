'use client';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Profile = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    _id: ''
  });
  const router = useRouter();
  const logout = async () => {
    try {
      await Axios.get('/api/users/logout');
      console.log('Logout Success');

      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const getUserDetails = async () => {
    const res = await Axios.get('/api/users/me');
    setUserData(res.data.data);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-3xl">Profile</h2>
      <div className="flex mb-3">
        <p className="mr-2">Username:</p>
        <p>
          <Link className="cursor-pointer underline" href={`/profile/${userData._id}`}>
            {userData.username}
          </Link>
        </p>
      </div>
      <div className="flex mb-3">
        <p className="mr-2">Email:</p>
        <p>{userData.email}</p>
      </div>
      <button onClick={logout} className="rounded-full px-3 py-2 text-lg bg-blue-700 text-white hover:bg-blue-500">
        Logout
      </button>
    </div>
  );
};

export default Profile;
