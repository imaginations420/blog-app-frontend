import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch('https://blog-app-backend-uj0w.onrender.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data.data });
      });
  }

  render() {
    return (
      <div>
        <h2>Blog Posts</h2>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}...</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
