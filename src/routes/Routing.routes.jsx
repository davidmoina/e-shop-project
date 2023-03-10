import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import NotFound from '../pages/NotFound/NotFound'
import CartPage from '../pages/CartPage/CartPage';
import Header from '../containers/HeaderContainer/Header';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import ProductsList from '../components/ProductsList/ProductsList';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Header/>}>
                    <Route index element={<Home/>} />
                    <Route path="products" element={<Products/>}>
                        <Route index element={<ProductsList/>}/>
                        <Route path=':collection' element={<ProductsList/>} />
                    </Route>
                    <Route path='cart' element={<CartPage/>}/>
                    <Route path='detail/:productId' element={<ProductDetailPage/>} />
                </Route>
                <Route path='cart/checkout' element={<CheckoutPage/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;