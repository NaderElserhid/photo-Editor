import "./topBar.css";
import UserButton from "../userButton/userButton";
import Image from "../image/image";


const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <a href="/" className="">
          <Image  path="/general/search.svg" alt="" />
        </a>
        <input type="text" placeholder="Search" />
      </div>
      <div>
       <UserButton/>
      </div>
    </div>
  );
};

export default TopBar;
