import React, { Component } from "react";

export default class QuizzElement extends Component {
  render() {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">Tu es un... {this.props.name} </h1>
        <p className="lead text-muted">{this.props.desc}</p>
      </div>
    );
  }
}
