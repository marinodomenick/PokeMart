import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const useAuth = () => {
  const { user, setUser, token, setToken } = useContext(AuthContext);

  return {
    user,
    setUser,
    token,
    setToken
  };
};

//remove token?

export default useAuth;
