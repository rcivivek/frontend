import {useState, useEffect,useCallback} from "react";

let logoutTimer;
export const useAuth = () => {
    const [userId, setUserId] =useState(false);
  const [token,setToken]  = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  useEffect(()=>{
     const storedData =  JSON.parse(localStorage.getItem('userData'));
      if(storedData && storedData.token && new Date(storedData.expiration) > new Date()){
        login(storedData.userId, storedData.token, storedData.expiration);
      }
  },[])
   
  const login = useCallback((uid,token,expirationDate)=>{
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() +1000* 60*60);
    
    setTokenExpirationDate(tokenExpirationDate);

    localStorage.setItem('userData',JSON.stringify({userId: uid, token: token,expiration: tokenExpirationDate.toString()}));
  },[]);
  const logout = useCallback(()=>{
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
  },[]);

  useEffect(()=>{
    if(token && tokenExpirationDate){
      const remainingTime = new Date(tokenExpirationDate).getTime() -new Date().getTime();
      setTimeout(logout, remainingTime);
    }
  },[token, logout, tokenExpirationDate]);

  return {token, login, logout, userId};
}