import React from "react";

function ProfileComponent() {
    const user = JSON.parse(localStorage.getItem("user"));
// user.email
  return (
    <main>
      <h2>Hello {user.email}</h2>
      <p>
        This is your profile!
      </p>
    </main>
  );
}

export default ProfileComponent;

