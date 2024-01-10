import React from "react";

const Ingredient = ({
  title,
  buttons,
  onIncrementIngredient,
  onDecrementIngredient,
  disabled,
}) => {
  return (
    <div>
      {title}
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              index === 0
                ? onIncrementIngredient(title)
                : onDecrementIngredient(title);
            }}
            disabled={index !== 0 ? disabled : false}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Ingredient;
