import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../containers/HeaderContainer/Header'
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import NotFound from '../pages/NotFound/NotFound'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;