import Post from "./Post";
function Home(props) {
  let postList = props.postList;
  return (
    <div className="home">
      {postList.map((post) => {
        return <Post postTitle={post.title} />;
      })}
    </div>
  );
}

export default Home;
