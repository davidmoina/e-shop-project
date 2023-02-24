import CartProvider from "./context/CartContext/CartProvider";
import Routing from "./Routes/Routing";

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
