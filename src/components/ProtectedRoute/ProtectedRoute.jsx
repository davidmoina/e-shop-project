import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext"

const ProtectedRoute = ({children}) => {

  const { actualUser } = useContext(AuthContext);

  if(!actualUser) {
    return <Navigate to="/"/>
  }

  return <Outlet/>
  
}

export default ProtectedRoute