import { useState } from "react";

function Profile({ user, onLogout }) {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <div className="relative flex p-4">
      <img
        src={`https://ui-avatars.com/api/?name=${user.name}`}
        alt="profile"
        className=" rounded-full cursor-pointer"
        onClick={toggleProfile}
      />

      {showProfile && (
       <div className="absolute right-30 w-60 rounded-2xl border border-gray-200 bg-slate-50/70 p-6 shadow-2xl backdrop-blur-md">

  <div className="mb-2 flex items-center gap-3">
    
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-xl font-bold text-violet-700">
      {user.name?.charAt(0)}
    </div>

    <div>
      <h2 className="text-lg font-semibold text-violet-700">
        Welcome back !
      </h2>

      <p className="text-sm text-black">
        User Dashboard
      </p>
    </div>
  </div>

  <div className="mb-4 border-t border-gray-200"></div>

  <div className="space-y-1 text-left">

    <div>
     

      <p className=" text-black">
       Name : {user.name}
      </p>
    </div>

    <div>
      <p className="truncate text-sm text-black">
        Email : {user.email}
      </p>
    </div>

  </div>

  <button
    onClick={onLogout}
    className="mt-6 w-full rounded-xl bg-violet-700 py-2 font-medium text-white transition hover:bg-violet-800 active:scale-[0.98]"
  >
    Logout
  </button>

</div>
      )}
    </div>
  );
}

export default Profile;