import React from "react";
import Ingradient from "../Ingradient/Ingradient";

const Burger = ({ ingradients }) => {
  let ingradientArr = ingradients.map((item) => {
    let amountArr = [...Array(item.amount).keys()];
    return amountArr.map((_) => {
      return <Ingradient type={item.type} key={Math.random()} />;
    });
  }).reduce((arr, elem) =>{
    return  arr.concat(elem)
  }, [])
//   console.log(ingradientArr);
  if(ingradientArr.length === 0){
      ingradientArr = <p style={{color:'red', textAlign: 'center', fontWeight:'bold'}}>Please add some ingradient!!!</p>
  }
  return (
    <div>
      <Ingradient type="burgerTop" />
      {ingradientArr}
      <Ingradient type="burgerBottom" />
    </div>
  );
};

export default Burger;
