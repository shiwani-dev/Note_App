import { useState } from "react";

function Profile({ user, onLogout }) {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="relative flex justify-end p-4">
      <img
        src={`https://ui-avatars.com/api/?name=${user.name}`}
        alt="profile"
        className=" rounded-full cursor-pointer"
        onClick={toggleProfile}
      />

      {showProfile && (
        <div className="absolute top-12 right-0  rounded-xl bg-white text-black shadow-lg p-4">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>

          <button
            onClick={onLogout} 
            className="mt-3 w-full rounded-lg bg-red-500 text-white py-1"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;