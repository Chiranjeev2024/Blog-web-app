import { useNavigate } from "react-router-dom";
import "../Styles/CreatePost.css";

function CreatePost(props) {
  let { postList, setPostList } = props;
  // console.log(props.setPostList);
  const navigate = useNavigate();
  let postTitleInput = "";
  let postDescriptionInput = "";
  let postAuthor = "";
  const handleTitleInput = (e) => {
    postTitleInput = e.target.value;
  };
  const handleDescriptionInput = (e) => {
    postDescriptionInput = e.target.value;
  };
  const postAuthorInput = (e) => {
    postAuthor = e.target.value;
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    const post = {
      title: postTitleInput,
      description: postDescriptionInput,
      author: postAuthor,
    };
    postList.unshift(post);
    setPostList(props.postList);
    navigate("/");
  };
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmitButton} className="form-field">
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={postAuthorInput}
          required
        />
        <label>Post title</label>
        <input
          type="text"
          placeholder="Enter the blog title"
          onChange={handleTitleInput}
          required
        />
        <label>Post Description</label>
        <textarea
          id="post-details"
          placeholder="Describe your blog here..."
          onChange={handleDescriptionInput}
          required
        />

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
