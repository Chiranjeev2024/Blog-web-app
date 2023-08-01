import Post from "./Post";
import "../Styles/Home.css";
function Home(props) {
  let postList = props.postList;
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
