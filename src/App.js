import "./App.css";
import React, { Component } from "react";
import { Header, QuizzElement, QuizzAnswer, Loading } from "./components";
import dataQuizz from "./dataQ";
import dataAnswer from "./dataA";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizz: null,
      selectedQ: 0,
      loaded: false,
      history: [],
      name: dataAnswer[3].name,
      desc: dataAnswer[3].desc,
    };
  }

  updateQ = (index) => {
    this.state.history.push(index);
    this.setState({
      selectedQ: this.state.selectedQ + 1,
    });

    // console.log("index", index); // réponse sélectionnée
    // console.log("selectedq", this.state.selectedQ); // Num de la question à afficher
    // console.log("history", this.state.history);
    // console.log("quizz lenght", this.state.quizz.length);
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        quizz: dataQuizz,
        loaded: true,
      });
    }, 0);
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2">
            {this.state.selectedQ < this.state.quizz.length ? (
              <QuizzElement
                quizz={this.state.quizz[this.state.selectedQ]}
                onClick={this.updateQ}
              />
            ) : (
              <QuizzAnswer name={this.state.name} desc={this.state.desc} />
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
