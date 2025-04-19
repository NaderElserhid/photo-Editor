import "./profilePage.css";
import Image from "../../components/image/image";
import { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import Collections from "../../components/collections/collections";
const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        path="/general/noAvatar.png"
        alt=""
      />
      <h1 className="profileName">name</h1>
      <span className="profileUsername">username data</span>
      <div className="followCounts">followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>follwers</button>
          <button>Message</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
         <Collections></Collections>
      </div>
    </div>
  );
};

export default ProfilePage;
