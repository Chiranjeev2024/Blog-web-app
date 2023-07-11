import "../Styles/App.css";
import { Routes as Switch, Route } from "react-router-dom";
import { Navbar, Home, PostDetail, CreatePost } from "./";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route exact path="/postId" Component={PostDetail} />
        <Route exact path="/createPost" Component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
