import { useParams } from "react-router-dom";

function PostDetail(props) {
  let { postList, setPostList } = props;

  let { pos } = useParams();
  if (postList[pos] === undefined) {
    return <h1>No Such Post Exist</h1>;
  }
  let { title, description, author } = postList[pos];

  return (
    <div className="post-detail">
      <h1>{title}</h1>
      <p id="blog-by">By-{author}</p>
      <p>{description}</p>
    </div>
  );
}

export default PostDetail;
