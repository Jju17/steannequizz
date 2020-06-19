import React, { Component } from "react";

export default class QuizzElement extends Component {
  render() {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5">
          Félicitations! Tu es le {this.props.name} de Ste Anne!
        </h1>
        <p className="lead text-muted">{this.props.desc}</p>
        <button
          onClick={() => {
            this.props.onClick();
          }}
          type="button"
          className="btn btn-light btn-lg"
        >
          Rejouer
        </button>
      </div>
    );
  }
}
