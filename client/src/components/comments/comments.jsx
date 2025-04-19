import { useState } from "react";
import Image from "../image/image";
import EmojiPicker from "emoji-picker-react";
import "./comments.css";
function Comments() {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <Image path="/general/noAvatar.png"></Image>
        <span className="">5</span>
      </div>
      <form className="commentForm">
      <input
        type="text"
        placeholder="Add a comment"
      />
      <div className="emoji">
        <div onClick={() => setOpen((prev) => !prev)}>😊</div>
        {open && (
          <div className="emojiPicker">
            <EmojiPicker />
          </div>
        )}
      </div>
      </form>
    </div>
  );
}

export default Comments;
