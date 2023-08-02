import "../Styles/App.css";
import { useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Navbar, Home, PostDetail, CreatePost } from "./";
function App() {
  let [postList, setPostList] = useState([]);
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route
          path="/"
          element={<Home postList={postList} setPostList={setPostList} />}
        />
        <Route path="/postId" element={<PostDetail postList={postList} />} />
        <Route
          path="/createPost"
          element={<CreatePost postList={postList} setPostList={setPostList} />}
        />
      </Switch>
    </div>
  );
}

export default App;
