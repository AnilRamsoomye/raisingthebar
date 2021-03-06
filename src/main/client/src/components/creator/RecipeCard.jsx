import React, { Component } from 'react';
import './RecipeCard.scss';
import Button from "@material-ui/core/Button";

export default class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onButtonClick() {
    this.props.addRecipeToSimulation(this.props.recipe);
  }

  onDeleteClick() {
    this.props.onDeleteCallback(this.props.recipe.id);
  }

  render() {
    return (
      <div className="card text-center col" id="card">
        <div className="card-body text-dark" id="card-body">
          <h4 className="card-title" id="card-title">{this.props.recipe.name}</h4>
          <p className="card-recipes text-secondary" id="card-recipes">{this.props.recipe.description}</p>
          <div onClick={this.onButtonClick} className="card-bottom container-fluid d-flex justify-content-around" id="card-bottom">
            <Button variant="contained">Add</Button>
          </div>
          
          {(this.props.user != null && this.props.user.id === this.props.recipe.creator) ?
          <div onClick={this.onDeleteClick} className="card-bottom container-fluid d-flex justify-content-around" id="card-bottom">
            <Button variant="contained">Delete</Button>
          </div>
           : ""}
        </div>
      </div>
    );
  }
}