import "../Styles/App.css";
import { useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Navbar, Home, PostDetail, CreatePost, UpdatePost } from "./";

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
        <Route
          path="/postDetail/:pos"
          element={<PostDetail postList={postList} setPostList={setPostList} />}
        />
        <Route
          path="/updatePost/:pos"
          element={
            <UpdatePost
              postList={postList}
              setPostList={setPostList}
              setExtraMessage={setExtraMessage}
            />
          }
        />
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
