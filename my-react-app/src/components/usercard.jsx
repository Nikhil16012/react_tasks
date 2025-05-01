import React from 'react'

const UserCard = ({ name, age, location }) => {
    return (
      <div className="w-80 bg-white shadow-md rounded-xl p-6 text-center transition-all duration-500">
        {/* <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        /> */}
        <h2 className="text-xl font-semibold">Name:{name}</h2>
        <p className="text-gray-600">location:{location}</p>
        <p className="text-gray-800 font-medium">Age: {age}</p>
      </div>
    );
  };
  
  export default UserCard;
  