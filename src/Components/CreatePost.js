import { useNavigate } from "react-router-dom";
import "../Styles/index.css";

function CreatePost(props) {
  let { postList, setPostList } = props;
  // console.log(props.setPostList);
  const navigate = useNavigate();
  let postTitleInput = "";
  let postDescriptionInput = "";
  const handleTitleInput = (e) => {
    postTitleInput = e.target.value;
  };
  const handleDescriptionInput = (e) => {
    // console.log("hello");
    postDescriptionInput = e.target.value;
  };
  const handleButton = (e) => {
    e.preventDefault();
    //console.log("hello");
    const post = {
      title: postTitleInput,
      description: postDescriptionInput,
    };
    //console.log(postList);
    postList.unshift(post);
    setPostList(props.postList);
    navigate("/");
  };
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleButton}>
        <div className="form-field">
          <label>Post title</label>
          <input
            type="text"
            placeholder="Enter the blog title"
            onChange={handleTitleInput}
          />
          <label>Post Description</label>
          <textarea
            id="post-details"
            placeholder="Describe your blog here..."
            onChange={handleDescriptionInput}
          />
        </div>
        <button className="create-post-btn" onClick={handleButton}>
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
