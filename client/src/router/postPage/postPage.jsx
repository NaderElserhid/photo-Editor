import "./postPage.css";
import Image from "../../components/image/image"
import PostEnteractions from "../../components/postEnteractions/postEnteractions"
const PostPage = () => {
  return (
    <div className="postPage">
      <div className="PostContener">
        <div className="postImg">
          <Image  path="/pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostEnteractions className="">info addnd adata </PostEnteractions>
      </div>
    </div>
    </div>
  );
};

export default PostPage;
