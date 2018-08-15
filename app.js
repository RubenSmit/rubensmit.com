import React from "react";
import { Router, Route, browserHistory, Link } from "react-router";
import {
  createApp,
  withPhenomicApi,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

const Home = ({ isLoading, posts }) => (
  <div>
    <h1>Home</h1>
    {isLoading && "Loading..."}
    {!isLoading && (
      <ul>
        {posts &&
          posts.node &&
          posts.node.list &&
          posts.node.list.map(post => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}/`}>{post.title || post.id}</Link>
            </li>
          ))}
      </ul>
    )}
  </div>
);

const BlogPost = ({ isLoading, page }) => (
  <div>
    {isLoading && "Loading..."}
    {!isLoading &&
      page.node && (
        <article>
          <h1>{page.node.title}</h1>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </article>
      )}
    <footer>
      <Link to="/">Go to home</Link>
    </footer>
  </div>
);

const HomeContainer = withPhenomicApi(Home, () => ({
  posts: query({ path: "content/posts", limit: 2 })
}));

const BlogPostContainer = withPhenomicApi(BlogPost, props => ({
  page: query({ path: "content/posts", id: props.params.splat })
}));

export default createApp(() => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer} />
    <Route path="/blog/*" component={BlogPostContainer} />
  </Router>
));
