import React from 'react';

import withSubscription from './withSubscription/withSubscription';
import CommentList from './CommentList/CommentList';
import BlogPost from './BlogPost/BlogPost';

const CommentListWithSubscription = withSubscription(CommentList);
const BlogPostWithSubscription = withSubscription(BlogPost);

function App() {
  return (
    <div className="App">
      <CommentListWithSubscription />
      <BlogPostWithSubscription />
    </div>
  );
}

export default App;
