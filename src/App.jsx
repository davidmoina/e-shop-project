import CartProvider from "./context/CartContext/CartProvider";
import Routing from "./routes/Routing.routes.jsx";

function App() {
    return (
        <>
        <CartProvider>
            <Routing/>
        </CartProvider>
        </> 
    );
}

export default App;
