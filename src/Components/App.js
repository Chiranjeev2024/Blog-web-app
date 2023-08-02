import "../Styles/App.css";
import { useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Navbar, Home, PostDetail, CreatePost } from "./";
function App() {
  let [postList, setPostList] = useState([]);
  let [extraMessage, setExtraMessage] = useState("");
  return (
    <div className="container">
      <Navbar />

      <h3>{extraMessage}</h3>

      <Switch>
        <Route
          path="/"
          element={
            <Home
              postList={postList}
              setPostList={setPostList}
              setExtraMessage={setExtraMessage}
            />
          }
        />
        <Route path="/postId" element={<PostDetail postList={postList} />} />
        <Route
          path="/createPost"
          element={
            <CreatePost
              postList={postList}
              setPostList={setPostList}
              setExtraMessage={setExtraMessage}
            />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
