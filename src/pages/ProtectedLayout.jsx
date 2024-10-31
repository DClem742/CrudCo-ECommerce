import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import NavBar from "../components/MainNav";

export const action = async ({ request }) => {
    return null;
}

const ProtectedLayout = () => {
    const { isLoading, token, user } = useAuth();
  
    if (!token && !user) {
      return <Navigate to="/login" replace/>;
    }
    
    return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
