import { useState } from "react";
import "./userButton.css";
import Image from "../image/image";


const UserButton = () => {
  const [open, setopen] = useState(false);
  const currentUser = true;
  return currentUser ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="" />
      <Image
        onClick={() => setopen((prev) => !prev)}
        path="/general/arrow.svg"
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
