import React, { Component } from "react";

export default class QuizzElement extends Component {
  render() {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="mb-5"> {this.props.quizz.q} </h1>
        {this.props.quizz.a.map((a, i) => (
          <button
            key={i}
            type="button"
            className="btn btn-light btn-lg btn-block"
            onClick={() => {
              this.props.onClick(i);
            }}
          >
            {a}
          </button>
        ))}

        {/* <ul className="list-group w-100">
          {this.state.quizz.a.map((i) => (
            <li className="list-group-item">{i}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}
