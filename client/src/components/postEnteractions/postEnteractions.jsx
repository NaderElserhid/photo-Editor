import "./postEnteractions.css"
import Image from "../image/image";
const PostEnteractions = () => {
  return (
    <>
      <div className="postInteractions">
        <div className="interactionIcons">
        <Image path="/general/react.svg" alt="" />
        278
        <Image path="/general/share.svg" alt="" />
        <Image path="/general/more.svg" alt="" />
        </div>
        <button>save</button>
      </div>
    </>
  );
};

export default PostEnteractions;
