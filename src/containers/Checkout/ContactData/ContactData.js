import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";

import "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.price,
      customer: {
        name: "Leonie",
        address: {
          street: "Test",
          zipCode: "W111EK",
          country: "UK"
        },
        email: "Test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className="Input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="Input"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className="Input"
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className="Input"
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
