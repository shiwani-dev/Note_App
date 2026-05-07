/* import {useState } from "react";

function Profile () {

    const[user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user"));
    });
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    
    if (!user) return <p>Loading...</p>;


    return (

        <div>

            <img
            src={`https://ui-avatars.com/api/?name=${user.name}`}
            alt="profile"
            className="w-16 h-16 rounded-full"
             />

            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <button onClick={handleLogout}>
            Logout
            </button>

        </div>

    );
}

export default Profile; */