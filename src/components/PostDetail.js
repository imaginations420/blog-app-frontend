import React, { Component } from 'react';

class PostDetail extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://blog-app-backend-uj0w.onrender.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ post: data.data });
      });
  }

  render() {
    const { post } = this.state;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
