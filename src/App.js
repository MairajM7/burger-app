import "./App.css";
import React, { useState } from "react";
import Ingredient from "./MyFunctions/Ingredient";

const App = () => {
  const initialIngredientDataItem = [
    { title: "Salad", salad: 20 },
    { title: "Bacon", bacon: 30 },
    { title: "Cheese", cheese: 40 },
    { title: "Meat", meat: 50 },
  ];

  const [ingredientDataItem] = useState(initialIngredientDataItem);

  const [ingredients, setIngredients] = useState([]);

  const buttonTitles = {
    moreButtonTitle: "MORE",
    lessButtonTitle: "LESS",
  };

  const onIncrementIngredient = (type) => {
    const newIngredient = {
      type: type,
      price: getPriceByTitle(type),
    };

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const onDecrementIngredient = (type) => {
    const indexToRemove = ingredients
      .map((ingredient) => ingredient.type)
      .lastIndexOf(type);

    if (indexToRemove !== -1) {
      const newIngredients = [...ingredients];
      newIngredients.splice(indexToRemove, 1);

      setIngredients(newIngredients);
    }
  };

  const renderFilteredIngredients = (title) => {
    return ingredients
      .filter((ingredient) => ingredient.type === title)
      .map((element, index) => <li key={index}>{element.type[0]}</li>);
  };

  const getPrices = () => {
    let totalPrice = 0;

    ingredients.forEach((element) => {
      totalPrice += element.price;
    });

    return totalPrice;
  };

  const getPriceByTitle = (title) => {
    const ingredientItem = ingredientDataItem.find(
      (item) => item.title === title
    );
    return ingredientItem[title.toLowerCase()] || 0;
  };

  return (
    <div className="App">
      {ingredientDataItem.map((data, index) => {
        return (
          <Ingredient
            key={index}
            title={data.title}
            onIncrementIngredient={onIncrementIngredient}
            onDecrementIngredient={onDecrementIngredient}
            disabled={
              ingredients.filter((ingredient) => ingredient.type === data.title)
                .length <= 0
            }
            moreButtonTitle={buttonTitles.moreButtonTitle}
            lessButtonTitle={buttonTitles.lessButtonTitle}
          />
        );
      })}

      <div>
        <h1>TotalPrice {getPrices()}</h1>
        {ingredientDataItem.map((data, index) => (
          <div key={index}>{renderFilteredIngredients(data.title)}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
