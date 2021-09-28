import './login.css';
import {Link} from 'react-router-dom'
import { Context } from '../../context/Context'
import { useContext, useRef,useState } from "react";
import axios from 'axios'
export default function Login() {
    
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch ,isFetching } = useContext(Context)
    const [error, setError] = useState(false);;
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError(false);
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/auth/login",{
                "username": userRef.current.value,
                "password": passwordRef.current.value
              })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        }
        catch(err){
            setError(true);
            dispatch({type:"LOGIN_FAILURE"})
        }
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" ref={userRef} placeholder="Enter username.."/>
                <label>Password</label>
                <input type="password" className="loginInput" ref={passwordRef} placeholder="Enter password"/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    )
}
