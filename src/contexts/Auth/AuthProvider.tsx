import { useState , useEffect, useReducer} from "react";
import { User } from "../../types/User";

import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";
import { apiURL } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element}) => {

  const [user, setUser] = useState<User | null>(null); 

  const api = useApi();
  const header = apiURL;

  
  useEffect(() => {
    //console.log(user)     
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');     
      if(storageData){               
        header.defaults.headers.authorization = storageData; 
        const data = await api.validateToken(storageData); 
        //console.log(storageData)              
        if(data.user){
          //console.log("Token valido!!")
          setUser(data.user);
        }
      }
    }

    validateToken();
  }, [api]);


  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if(data.user && data.token){            
      setUser(data.user);
      setToken(data.token)
      return true; 
    }
    return false;
  }

  const signout = async () => {
    //await api.logout();
    setUser(null);    
    setToken('')
  }

  const getProducts = async() => {
    const data = await api.getProducts()
    return data;
  }

  const setToken = async (token: string) => {
    localStorage.setItem('authToken', token );
  }
  
  return (
    <AuthContext.Provider value={{user, signin, signout, getProducts,}}>
      {children}
    </AuthContext.Provider>
  )
}