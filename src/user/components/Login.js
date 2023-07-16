import React from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from "../../shared/util/validators";

import Button from "../../shared/components/FormElements/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import './PageForm.css'

const Login = () =>{

    // const [formState,titleInputHandler] = useForm({
    //     username :{
    //        value: '',
    //        isValid: false
    //     },
    //     password :{
    //        value: '',
    //        isValid: false
    //     }  
    //    },false);
    return (<form className='place-form' >
            <Input 
                id = "username"
                element ='input' 
                type= "text" 
                label = "Username" 
                errorText = "Please enter Valid username."
                validators = {[VALIDATOR_REQUIRE()]} 
                onInput = {()=>{}} /> 
            <Input 
                id = "password"
                element ='input' 
                type= "password" 
                label = "Password" 
                errorText = "Enter a valid password."
                validators = {[VALIDATOR_MINLENGTH(8)]} 
                onInput = {()=>{}} /> 
            <Button type="submit">Log On</Button>
            <h2>Didn't Have account? <Link to={`/reg`}>SignUP</Link></h2>
     
  </form>
    );

};
export default Login;