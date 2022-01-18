import React from 'react';
import burgerBottom from '../../../assets/images/bread-bottom.png';
import burgerTop from '../../../assets/images/bread-top.png';
import cheese from '../../../assets/images/cheese.png';
import meet from '../../../assets/images/meet.png';
import salad from '../../../assets/images/salad.png';
import './ingradient.css';

const Ingradient = (props) => {
    let ingradient = null;
    switch (props.type) {
        case 'burgerTop':
            ingradient= <div><img src={burgerTop} alt="top" /></div>
            break;
    
        case 'burgerBottom':
            ingradient= <div><img src={burgerBottom} alt="top" /></div>
            break;
    
        case 'meet':
            ingradient= <div><img src={meet} alt="top" /></div>
            break;
    
        case 'cheese':
            ingradient= <div><img src={cheese} alt="top" /></div>
            break;
    
        case 'salad':
            ingradient= <div><img src={salad} alt="top" /></div>
            break;
    
        default:
            break;
    }
    return (
        <div className='ingradient'>
            {ingradient}
        </div>
    );
};

export default Ingradient;