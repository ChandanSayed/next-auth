import React from 'react';

const UserProfile = ({ params }: any) => {
  return (
    <div>
      UserProfile
      <span className="rounded p-4 bg-black text-white hover:bg-opacity-80 cursor-pointer text-lg">{params.id}</span>
    </div>
  );
};

export default UserProfile;
