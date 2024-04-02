import { useNavigate } from "react-router-dom";

function useSwitchRoutes(route) {
  const navigate = useNavigate();
  function switchRoute() {
    navigate(route);
  }
  return switchRoute;
}

export default useSwitchRoutes;
