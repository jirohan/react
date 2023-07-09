import {useState} from "react";
import {login, logout} from "../store";
import { useDispatch, useSelector } from "react-redux/es/exports";

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.usename);

  return (
   <h1>
    {username}
    <input 
        onChange={(e) => {
            setNewUsername(e.target.value);
        }}
    />
    <button onClick={() => dispatch(login({username: newUsername}))}>Submit Login</button>
    <button>Logout</button>
   </h1>
  )
}