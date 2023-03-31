import { AuthContext } from "./AuthContext"
import { useState, useEffect } from 'react'
import { User } from "../../types/user"
import { useApi } from "../../hooks/useApi"

type Props = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)
  const Api = useApi();

  useEffect(()=>{
    const ValidateToken = async ()=>{
      const storageData = localStorage.getItem('authToken');
  
      if (storageData){
        const data = await Api.validateToken(storageData)
        if(data.user){
          setUser(data.user)
        }
      }
    }
  
    ValidateToken();
  }, [])


  const signin = async (email:string, password:string) => {
    const data = await Api.singin(email, password)
    if(data.user && data.token){
      setUser(data.user)
      setToken(data.token)
      return true;
    }
    return false;
  }

  const signout = async () =>{
    await Api.signout();
    setUser(null);
    setToken("");
  }

  const setToken = (token:string) =>{
    localStorage.setItem('authToken', token);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}