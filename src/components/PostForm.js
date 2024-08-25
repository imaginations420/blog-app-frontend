import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    content: ''
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      fetch(`https://blog-app-backend-uj0w.onrender.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
          this.setState({ title: data.data.title, content: data.data.content });
        });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const url = id ? `https://blog-app-backend-uj0w.onrender.com/${id}` : 'https://blog-app-backend-uj0w.onrender.com/posts';
    const method = id ? 'PUT' : 'POST';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => {
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <div>
        <h2>{this.props.match.params.id ? 'Edit Post' : 'Create New Post'}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
