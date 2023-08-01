import Post from "./Post";
import "../Styles/Home_.css";
function Home(props) {
  let postList = props.postList;
  if (postList.length === 0) {
    return (
      <div className="home">
        <h1>Blog Web App</h1>
        <h1>Click on the Create Post to Create Blogs</h1>
      </div>
    );
  }
  return (
    <div className="home">
      <h1>Blog Web App</h1>
      {postList.map((post) => {
        return <Post postTitle={post.title} />;
      })}
    </div>
  );
}

export default Home;
