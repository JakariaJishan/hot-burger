import React, { Component } from "react";
import BurgerControl from "../../BurgerControl/BurgerControl";
import Burger from "../Burger/Burger";

const INGREDIENT_PRICES = {
  salad: 20,
  cheese: 40,
  meet: 80,
};

export default class MainBurger extends Component {
  state = {
    ingradients: [
      { type: "salad", amount: 0 },
      { type: "cheese", amount: 0 },
      { type: "meet", amount: 0 },
    ],
    totalPrice: 80,
  };
  addIngredientHandle = (type) => {
    const ingredient = [...this.state.ingradients];
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    for (const item of ingredient) {
      if (item.type === type) {
        item.amount++;
      }
    }
    this.setState({
      ingradients: ingredient,
      totalPrice: newPrice,
    });
  };
  removeIngredientHandle = (type) => {
    const ingredient = [...this.state.ingradients];
    console.log(INGREDIENT_PRICES[type])
    let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    console.log(newPrice)
    for (const item of ingredient) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    this.setState({
      ingradients: ingredient,
      totalPrice: newPrice,
    });
  };
  render() {
    return (
      <div className="container ">
        <Burger ingradients={this.state.ingradients} />
        <BurgerControl
          addIngredientHandle={this.addIngredientHandle}
          removeIngredientHandle={this.removeIngredientHandle}
          totalPrice={this.state.totalPrice}
        />
      </div>
    );
  }
}
