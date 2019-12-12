import {Component} from "react";
import React from "react";
import ViewMySimulationsSimulationCard from "./ViewMySimulationsSimulationCard";

export default class ViewMySimulations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simulations: []
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/simulations/list', true);
    xhr.onload = function (e) {
      // do something to response
      console.log(JSON.parse(e.target.response));
      if(JSON.parse(e.target.response.simulations != null)) {
        this.setState({simulations: JSON.parse(e.target.response).simulations});
      }
    };
    xhr.send();
  }

  render() {
    let simulationCards = this.state.simulations.map(simulation => {
      return (
        <div className="col-md-3">
          <ViewMySimulationsSimulationCard key={simulation.title} simulation={simulation} />
        </div>
      )
    });

    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {simulationCards}
        </div>
      </div>
    );
  }
}