import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meet", type: "meet" },
];

const ControlPanel = (props) => {
    // console.log(props)
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="ml-5" style={{fontWeight: 'bold'}}>{props.label}</div>
      <div>
        <button className="btn btn-danger btn-sm m-1" onClick={()=> props.remove(props.type)}>Less</button>
        <button className="btn btn-success btn-sm " onClick={()=> props.added(props.type)}>More</button>
      </div>
    </div>
  );
};

const BurgerControl = (props) => {
    // console.log(props)
  return (
    <div>
      <Card>
        <CardHeader style={{ textAlign: "center" }}>
          {" "}
          <h3>Add Ingradients</h3>{" "}
        </CardHeader>
        <CardBody>
          {controls.map((elem) => (
            <ControlPanel
              label={elem.label}
              type={elem.type}
              added={props.addIngredientHandle}
              remove = {props.removeIngredientHandle}
              key={Math.random()}
            />
          ))}
        </CardBody>
        <CardFooter style={{ textAlign: "center" }}>
          {" "}
          <h4>  price <strong>{props.totalPrice}</strong> BDT</h4>{" "}
        </CardFooter>
        <Button disabled={!props.purchaseAble} color="secondary" onClick={props.toggoleModal}>Order Now</Button>
      </Card>
    </div>
  );
};

export default BurgerControl;
