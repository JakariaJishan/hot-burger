import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export default class Form extends Component {
  state={
    values: {
      deliveryAddress: '',
      mobile: '',
      paymentType: 'Cash on delivery'
    }
  }
  
  handleOnChange =(e) => {
    this.setState({
      values:{
        ...this.state.values,
        [e.target.name] : e.target.value
      }
    })
  }
  handleSubmit = () => {
    console.log(this.state.values)
  }
  render() {
    return (
      <div>
        <form action="" className="container">
          <textarea name="deliveryAddress" className="form-control" value={this.state.values.deliveryAddress}  onChange={(e) => this.handleOnChange(e)} placeholder="text"></textarea>
          <br />
          <input name="mobile" className="form-control" onChange={(e) => this.handleOnChange(e)} value={this.state.values.mobile}/>
          <br />
          <select name="paymentType" onChange={(e) => this.handleOnChange(e)} className="form-control" value={this.state.values.paymentType}>
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Bkash">Bkash</option>
          </select>
          <Button onClick={this.handleSubmit}>Place Order</Button>
          <Button onClick={this.goBack}>Cancle</Button>
        </form>
       
      </div>
    );
  }
}
