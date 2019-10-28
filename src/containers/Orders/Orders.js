import React, { Component } from "react";
import Order from "../../components/Order/Order";

class Orders extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white", paddingBottom: "2%" }}>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;
