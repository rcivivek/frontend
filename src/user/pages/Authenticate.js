import React from "react";
import Login from "../components/Login";

import Registration from "../components/Registration";
// import Registration from "../components/Registration";

const Authenicate = props =>{
    if(props.login ===true)
     return <Login/>
     return <Registration/>
};
export default Authenicate;