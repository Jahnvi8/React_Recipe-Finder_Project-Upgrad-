import React, { Component } from "react";
import axios from "axios";
import "../recipe/recipeBody.css";

class RecipeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal_arr: [],
    };
  }

  componentDidMount() {
    console.log(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.props.dish
    );
    if (this.props.dish === "") alert("Enter a Dish!!");
    else {
      axios
        .get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
            this.props.dish
        )
        .then((resolve) => {
          console.log(resolve.data.meals);
          this.setState({
            meal_arr: resolve.data.meals,
          });
        });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.dish !== prevProps.dish) {
      if (this.props.dish === "") alert("Enter a Dish!!");
      else {
        axios
          .get(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
              this.props.dish
          )
          .then((resolve) => {
            console.log(resolve.data.meals);
            this.setState({
              meal_arr: resolve.data.meals,
            });
          });
      }
    }
  }

  render() {
    const { meal_arr } = this.state;
    if (meal_arr !== null && meal_arr.length > 0) {
      var list = [];
      let i = 1;

      while (meal_arr[0]["strIngredient" + i] !== "") {
        list.push(
          <li key={i}>
            {" "}
            {meal_arr[0]["strIngredient" + i] +
              "----" +
              meal_arr[0]["strMeasure" + i]}{" "}
          </li>
        );
        i++;
      }
      console.log(list);
    }

    const id =
      meal_arr !== null && meal_arr.length > 0 ? (
        <div className="recipeContainer">
          <div className="title">
            <h1> {meal_arr[0].strMeal} </h1>
          </div>{" "}
          <div className="recipeData">
            <img
              src={meal_arr[0].strMealThumb}
              alt={"Your meal for " + meal_arr[0].strMeal}
            />{" "}
            <div class="textData">
              <p>
                <em> Category of Meal: </em> {meal_arr[0].strCategory}{" "}
              </p>{" "}
              <p>
                <em> Area of the Meal: </em> {meal_arr[0].strArea}{" "}
              </p>{" "}
              <h3> Ingredients: </h3> <ul className="ingredients"> {list} </ul>{" "}
              <h3> Recipes </h3>{" "}
              <div className="recipe"> {meal_arr[0].strInstructions} </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      ) : (
        <div className="noData"> No Data has been recieved </div>
      );
    return <div> {id} </div>;
  }
}
export default RecipeBody;
