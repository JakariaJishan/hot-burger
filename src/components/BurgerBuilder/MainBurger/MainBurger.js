import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import BurgerControl from "../../BurgerControl/BurgerControl";
import Burger from "../Burger/Burger";
import OrderSummary from "../OrderSummary/OrderSummary/OrderSummary";

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
    modalOpen: false,
    purchaseAble: false
  };

  handlePurchaseAble = ingradients => {
    const sum = ingradients.reduce((sum, elem) => {
      return sum+elem.amount;
    }, 0)
    this.setState({
      purchaseAble: sum>0
    })
  }
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
    this.handlePurchaseAble(ingredient);
  };
  removeIngredientHandle = (type) => {
    const ingredient = [...this.state.ingradients];
    // console.log(INGREDIENT_PRICES[type])
    // console.log(type)
    let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    // console.log(newPrice)
    for (const item of ingredient) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    // console.log(newPrice);

    this.setState({
      ingradients: ingredient,
      totalPrice: newPrice,
    });
    this.handlePurchaseAble(ingredient);

  };

  toggoleModal = () => {
    return this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
 
 
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div className="container ">
          <Burger ingradients={this.state.ingradients} />
          <BurgerControl
            addIngredientHandle={this.addIngredientHandle}
            removeIngredientHandle={this.removeIngredientHandle}
            totalPrice={this.state.totalPrice}
            toggoleModal={this.toggoleModal}
            purchaseAble={this.state.purchaseAble}
          />
        </div>
        <div>
         
          <Modal isOpen={this.state.modalOpen}>
            <ModalHeader>Your Order Summery</ModalHeader>
            <ModalBody>
              Total Price: {this.state.totalPrice.toFixed(0)} BDT
              <OrderSummary ingradients={this.state.ingradients}/>
            </ModalBody>
            <ModalFooter>
              <Link to={'/checkout'} >Contine to Checkout</Link>
              <Button onClick={this.toggoleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
