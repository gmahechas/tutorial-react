import { useContext } from 'react';
import { MyContext } from './my-provider';

const MyContextApi = () => {
	const { posts, fetchPosts } = useContext(MyContext);
	return (
    <>
      <button onClick={() => fetchPosts()}>Fetch Posts</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
	)
}

export default MyContextApi