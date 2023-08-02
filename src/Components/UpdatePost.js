import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/UpdatePost.css";
function UpdatePost(props) {
  const { pos } = useParams();
  const navigate = useNavigate();
  let { postList, setPostList, setExtraMessage } = props;
  let prevTitle = postList[pos].title;
  let [titleInput, setTitleInput] = useState(prevTitle);
  let prevDes = postList[pos].description;
  let [desInput, setDesInput] = useState(prevDes);
  const handleSubmitButton = (e) => {
    e.preventDefault();
    postList[pos].title = titleInput;
    postList[pos].description = desInput;
    setPostList(postList);
    navigate("/");
    setExtraMessage(`Post ${prevTitle} Updated to ${titleInput}`);
    setTimeout(() => {
      setExtraMessage("");
    }, 3000);
  };
  return (
    <div className="update-post">
      <h2>Update Post</h2>
      <form onSubmit={handleSubmitButton} className="form-field">
        <label>Post title</label>
        <input
          type="text"
          placeholder="Enter the blog title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          required
        />
        <label>Post Description</label>
        <textarea
          id="post-details"
          placeholder="Describe your blog here..."
          value={desInput}
          onChange={(e) => setDesInput(e.target.value)}
          required
        />

        <button className="update-post-btn">Update</button>
      </form>
    </div>
  );
}
export default UpdatePost;
