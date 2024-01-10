import "./App.css";
import React, { Component } from "react";
import Ingredient from "./MyFunctions/Ingredient";

class App extends Component {
  state = {
    // salad: [],
    // bacon: [],
    // cheese: [],
    // meat: [],
    ingredientDataItem: [
      { title: "Salad", buttons: ["More", "Less"] },
      { title: "Bacon", buttons: ["More", "Less"] },
      { title: "Cheese", buttons: ["More", "Less"] },
      { title: "Meat", buttons: ["More", "Less"] },
    ],
    ingredients: [],
  };

  // onIncrementSalad = () => {
  //   const newSalad = { value: "S", price: 10 };

  //   this.setState((prevState) => ({
  //     salad: [...prevState.salad, newSalad],
  //   }));
  // };

  // onDecrementSalad = () => {
  //   this.setState((prevState) => ({
  //     salad: prevState.salad.slice(0, -1),
  //   }));
  // };

  // onIncrementBacon = () => {
  //   const newBacon = { value: "B", price: 20 };

  //   this.setState((prevState) => ({
  //     bacon: [...prevState.bacon, newBacon],
  //   }));
  // };

  // onDecrementBacon = () => {
  //   this.setState((prevState) => ({
  //     bacon: prevState.bacon.slice(0, -1),
  //   }));
  // };

  // onIncrementCheese = () => {
  //   const newCheese = { value: "C", price: 30 };

  //   this.setState((prevState) => ({
  //     cheese: [...prevState.cheese, newCheese],
  //   }));
  // };

  // onDecrementCheese = () => {
  //   this.setState((prevState) => ({
  //     cheese: prevState.cheese.slice(0, -1),
  //   }));
  // };

  // onIncrementMeat = () => {
  //   const newMeat = { value: "M", price: 40 };

  //   this.setState((prevState) => ({
  //     meat: [...prevState.meat, newMeat],
  //   }));
  // };

  // onDecrementMeat = () => {
  //   this.setState((prevState) => ({
  //     meat: prevState.meat.slice(0, -1),
  //   }));
  // };

  // CountPrice = () => {
  //   let totalPrice = 0;
  //   this.state.salad.forEach((salad) => {
  //     totalPrice += salad.price;
  //   });
  //   this.state.bacon.forEach((bacon) => {
  //     totalPrice += bacon.price;
  //   });
  //   this.state.cheese.forEach((cheese) => {
  //     totalPrice += cheese.price;
  //   });
  //   this.state.meat.forEach((meat) => {
  //     totalPrice += meat.price;
  //   });
  //   return totalPrice;
  // };

  onIncrementIngredient = (type) => {
    const newIngredient = {
      type: type,
      value: type[0],
      price: this.setPrice(type),
    };
    console.log(newIngredient.value);
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, newIngredient],
    }));
  };

  onDecrementIngredient = (type) => {
    const indexToRemove = this.state.ingredients
      .map((ingredient) => ingredient.type)
      .lastIndexOf(type);

    if (indexToRemove !== -1) {
      const newIngredient = [...this.state.ingredients];
      newIngredient.splice(indexToRemove, 1);

      this.setState({ ingredients: newIngredient });
    }
  };

  renderFilteredIngredients = (value) => {
    return this.state.ingredients
      .filter((ingredient) => ingredient.value === value)
      .map((element, index) => <li key={index}>{element.value}</li>);
  };

  getPrices = () => {
    let totalPrice = 0;

    this.state.ingredients.forEach((element) => {
      totalPrice += element.price;
    });

    return totalPrice;
  };

  setPrice = (element) => {
    let price = 20;
    if (element === "Bacon") price = 30;
    if (element === "Cheese") price = 40;
    if (element === "Meat") price = 50;
    return price;
  };

  render() {
    return (
      <div className="App">
        {this.state.ingredientDataItem.map((data, index) => {
          return (
            <Ingredient
              key={index}
              title={data.title}
              buttons={data.buttons}
              onIncrementIngredient={this.onIncrementIngredient}
              onDecrementIngredient={this.onDecrementIngredient}
              disabled={
                this.state.ingredients.filter(
                  (ingredient) => ingredient.type === data.title
                ).length <= 0
              }
            />
          );
        })}

        <div>
          <h1>TotalPrice {this.getPrices()}</h1>
          {this.renderFilteredIngredients("S")}
          {this.renderFilteredIngredients("B")}
          {this.renderFilteredIngredients("C")}
          {this.renderFilteredIngredients("M")}
        </div>
        {/* <h1>Current Price {this.CountPrice()}</h1>
        <Salad
          onIncrementSalad={this.onIncrementSalad}
          onDecrementSalad={this.onDecrementSalad}
          disabled={this.state.salad.length === 0}
        ></Salad>
        <Bacon
          onIncrementBacon={this.onIncrementBacon}
          onDecrementBacon={this.onDecrementBacon}
          disabled={this.state.bacon.length === 0}
        ></Bacon>
        <Cheese
          onIncrementCheese={this.onIncrementCheese}
          onDecrementCheese={this.onDecrementCheese}
          disabled={this.state.cheese.length === 0}
        ></Cheese>
        <Meat
          onIncrementMeat={this.onIncrementMeat}
          onDecrementMeat={this.onDecrementMeat}
          disabled={this.state.meat.length === 0}
        ></Meat>
        <h1>_</h1>
        {this.state.salad.map((s, index) => (
          <li key={index}>{s.value}</li>
        ))}
        {this.state.bacon.map((b, index) => (
          <li key={index}>{b.value}</li>
        ))}
        {this.state.cheese.map((c, index) => (
          <li key={index}>{c.value}</li>
        ))}
        {this.state.meat.map((m, index) => (
          <li key={index}>{m.value}</li>
        ))}
        <h1>_</h1> */}
      </div>
    );
  }
}

export default App;
