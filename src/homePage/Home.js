import React, { Component } from "react";
import "./Home.css";
import RecipeBody from "../recipe/recipeBody";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      dish: "",
    };
  }

  getRecipe = (e) => {
    e.preventDefault();
    var item = document.getElementById("text").value;

    this.setState({
      searched: true,
      dish: item,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="heading"> Recipe Finder </h1>{" "}
          <form className="input-form">
            <input
              type="text"
              placeholder="Enter the Name of the Dish"
              id="text"
            />
            <input
              type="submit"
              value="Get Ingredients"
              onClick={this.getRecipe}
            />{" "}
          </form>{" "}
        </div>{" "}
        {this.state.searched ? (
          <RecipeBody dish={this.state.dish} />
        ) : (
          <h2 className="center">
            Type a Dish Name to search for it 's ingredients{" "}
          </h2>
        )}{" "}
      </div>
    );
  }
}
export default Home;
