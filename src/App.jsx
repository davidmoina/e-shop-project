import Header from "./containers/HeaderContainer/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    return (
        <>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
        </> 
    );
}

export default App;
