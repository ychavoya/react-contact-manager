import React, { Component } from "react";

export default class Test extends Component {
  state = {
    titulo: ""
  };
  componentDidMount() {
    // HTTP
    console.log("component did mount");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          titulo: data.title
        });
      });
  }

  // componentWillMount() {
  //   // AJAX
  //   console.log("component will mount");
  // }

  // componentDidUpdate() {
  //   console.log("component did update");
  // }

  // componentWillUpdate() {
  //   console.log("component will update");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("component will receive props", nextProps, nextState);
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: "algo"
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("get snapshot before update");
  // }

  render() {
    const { titulo } = this.state;
    return (
      <div>
        <h1>{titulo}</h1>
      </div>
    );
  }
}
