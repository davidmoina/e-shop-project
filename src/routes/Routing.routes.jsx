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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Footer from '../components/Footer/Footer';
import OrderDetailPage from '../pages/OrderDetailPage/OrderDetailPage';


const Routing = () => {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path='/' element={<Header/>}>
                    <Route index element={<Home/>} />
                    <Route path="products" element={<Products/>}>
                        <Route index element={<ProductsList/>}/>
                        <Route path=':collection' element={<ProductsList/>} />
                    </Route>
                    <Route path='cart' element={<CartPage/>}/>
                    <Route path='detail/:productId' element={<ProductDetailPage/>} />
                    <Route path='order_detail/:orderId' element={<OrderDetailPage/>} />
                </Route>
                <Route element={<ProtectedRoute/>}>
                    <Route path='cart/checkout' element={<CheckoutPage/>} />
                </Route>
                <Route path='*' element={<NotFound/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;