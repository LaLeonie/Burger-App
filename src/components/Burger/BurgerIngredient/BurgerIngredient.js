import React from "react";
import PropTypes from "prop-types";
import "./BurgerIngredient.css";

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className="BreadBottom">&nbsp;</div>;
      break;
    case "bread-top":
      ingredient = (
        <div className="BreadTop">
          &nbsp;
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="Meat">&nbsp;</div>;
      break;
    case "cheese":
      ingredient = <div className="Cheese">&nbsp;</div>;
      break;
    case "salad":
      ingredient = <div className="Salad">&nbsp;</div>;
      break;
    case "bacon":
      ingredient = <div className="Bacon">&nbsp;</div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
