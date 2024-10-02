import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

function Logout() {
  let navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    cookies.remove('accessToken', { path: '/' });

    navigate("/login", { replace: true });

    window.location.reload();
  }, [navigate]);

  return null; 
}

export default Logout;