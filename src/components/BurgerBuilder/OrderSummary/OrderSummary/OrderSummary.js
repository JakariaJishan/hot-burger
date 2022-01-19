import React from 'react';

const OrderSummary = (props) => {
      const ingradientsSummary = props.ingradients.map(item => {
            return <li key={Math.random()}>
                  <span style={{textTransform:'capitalize'}}>{item.type}: {item.amount}</span>
            </li>
      })
      return (
            <div>
                  {ingradientsSummary}
            </div>
      );
};

export default OrderSummary;