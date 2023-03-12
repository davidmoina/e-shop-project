import AuthProvider from "./context/AuthContext/AuthProvider";
import CartProvider from "./context/CartContext/CartProvider";
import Routing from "./routes/Routing.routes.jsx";

function App() {
    return (
        <>
        <AuthProvider>
            <CartProvider>
                <Routing/>
            </CartProvider>
        </AuthProvider>
        </> 
    );
}

export default App;
