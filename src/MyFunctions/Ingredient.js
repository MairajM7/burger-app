import React from "react";

const Ingredient = ({
  title,
  onIncrementIngredient,
  onDecrementIngredient,
  disabled,
  moreButtonTitle,
  lessButtonTitle,
}) => {
  return (
    <div>
      {title}
      <button
        onClick={() => {
          onIncrementIngredient(title);
        }}
      >
        {moreButtonTitle}
      </button>
      <button
        onClick={() => {
          onDecrementIngredient(title);
        }}
        disabled={disabled}
      >
        {lessButtonTitle}
      </button>
    </div>
  );
};

export default Ingredient;
