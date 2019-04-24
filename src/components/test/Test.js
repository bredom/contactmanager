import React, { Component } from 'react';

class Test extends Component {

  state = {
    test: 'test'
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        body: data.body,
        title: data.title
      })
    )
  }


  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;