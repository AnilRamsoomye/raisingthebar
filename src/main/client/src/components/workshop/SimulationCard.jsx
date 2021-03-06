import React, { Component } from 'react';
import './SimulationCard.scss';

export default class SimulationCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { id, name, recipes, description, isPractice, link } = this.props.simulation;
    return (
      <div className="card text-center container-fluid d-flex justify-content-center">
        <div className="card-body text-dark">
          <h4 className="card-title">{name}</h4>
          <p className="card-text text-secondary">{description}</p>
          <div className="card-bottom container-fluid d-flex justify-content-around">
            <p className="card-text text-secondary font-italic">{isPractice === true ? "Practice" : "Test"}</p>
            <a href={"/bartop/simulation/"+ id} className="mdl-button mdl-js-button mdl-button--raised">Start</a>
          </div>
        </div>
      </div>
    );
  }
}