import "../Styles/Post.css";
function Post(props) {
  return (
    <div className="post">
      <h3>{props.postTitle}</h3>
      <p id="message">Click on the blog title to read the post</p>
      <div className="btn-ctn">
        <button id="update-btn">Update</button>
        <button id="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default Post;
