import React, { Component } from 'react';
import MainBurger from '../BurgerBuilder/MainBurger/MainBurger';
import Header from '../Header/Header';

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <MainBurger/>
            </div>
        );
    }
}

export default Main;