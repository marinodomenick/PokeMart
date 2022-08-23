import { useContext } from "react";
import usersContext from "../Context/UsersContext";

const useUsers = () => {
  const { users, setUsers } = useContext(usersContext);

  return { users, setUsers };
};

export default useUsers;
