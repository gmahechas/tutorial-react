import { MyCustomUseEffectTree } from './my-custom-use-effec-tree';

const MyUseEffect = () => {
  const [posts, triggerFetch] = MyCustomUseEffectTree();
  return (
    <>
      <button onClick={triggerFetch}>Fetch Posts</button>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default MyUseEffect;
