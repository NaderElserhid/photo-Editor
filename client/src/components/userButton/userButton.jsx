import { useState } from "react";
import "./userButton.css";

const UserButton = () => {
  const [open, setopen] = useState(false);
  const currentUser = true;
  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img
        onClick={() => setopen((prev) => !prev)}
        src="/general/arrow.svg"
        alt=""
        className="arrow"
      />
{  open && <div className="userOptions">
        <div className="userOption">Profile</div>
        <div className="userOption">Setting</div>
        <div className="userOption">Logout</div>
      </div>}
    </div>
  ) : (
    <div>
      <a href="" className="loginLink">
        login \ Sing Up
      </a>
    </div>
  );
};

export default UserButton;
