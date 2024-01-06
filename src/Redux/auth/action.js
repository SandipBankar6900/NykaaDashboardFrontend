import axios from "axios"
import { LOG_FAIL, LOG_RES, LOG_SUCC } from "./actiontypes"

export const getLog = (userdata) => (dispatch) => {
    dispatch({ type: LOG_RES });
  
    let login = axios
      .post("https://naykaabackenddd.onrender.com/user/login", userdata)
      .then((res) => {
      
        const {token}=res.data;
        localStorage.setItem('token',token)
        // console.log(token)
        dispatch({ type: LOG_SUCC, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: LOG_FAIL, payload: err.message });
      });
  
    return login;
  };
  export const logout = () => (dispatch) => {
    
    localStorage.removeItem('token');
  
    
    dispatch({ type: "LOGOUT" });
  };