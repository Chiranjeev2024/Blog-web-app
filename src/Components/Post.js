import { useNavigate } from "react-router-dom";
import "../Styles/Post.css";
function Post(props) {
  let { postTitle, author, postList, setPostList, index, setExtraMessage } =
    props;
  const navigate = useNavigate();
  const handleDelete = () => {
    console.log("Delete Button Pressed");
    postList.splice(index, 1);
    let newPostList = [...postList];
    let extraMessage = `Deleted blog post ${postTitle}`;
    setPostList(newPostList);
    setExtraMessage(extraMessage);
    setTimeout(() => {
      setExtraMessage("");
    }, 3000);
  };
  const handleUpdate = () => {
    navigate(`/updatePost/${index}`);
  };
  const handleTitleClick = () => {
    navigate(`/postDetail/${index}`);
  };
  // console.log(author);
  return (
    <div className="post">
      <div className="blog-decription-ctn">
        <h3 onClick={handleTitleClick}>{postTitle}</h3>
        <p>Blog By - {author}</p>
      </div>
      <p id="message">Click on the blog title to read the post</p>
      <div className="btn-ctn">
        <button id="update-btn" onClick={handleUpdate}>
          Update
        </button>
        <button id="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
