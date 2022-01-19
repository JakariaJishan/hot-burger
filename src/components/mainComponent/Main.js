import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainBurger from '../BurgerBuilder/MainBurger/MainBurger';
import CheckOut from '../CheckOut/CheckOut';
import Header from '../Header/Header';

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={ <MainBurger/>}/>
                    <Route path='/checkout' element={ <CheckOut/>}/>
                </Routes>
               
            </div>
        );
    }
}

export default Main;