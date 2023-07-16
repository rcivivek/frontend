import React from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH } from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";

import Button from "../../shared/components/FormElements/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Card from "../../shared/components/UIElements/Card";


// import './PageForm.css'

const Login = () =>{

    const [formState,inputInputHandler] = useForm({
        username :{
           value: '',
           isValid: false
        },
        password :{
           value: '',
           isValid: false
        }  
       },false);
       const formSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs);
     };

    return (
    <Card className='authentication'>
    <form className='place-form' onSubmit={formSubmitHandler} >
        <h2>Login Credentials</h2>
            <Input 
                id = "username"
                element ='input' 
                type= "text" 
                label = "Username" 
                errorText = "Please enter Valid username."
                validators = {[VALIDATOR_REQUIRE()]} 
                onInput = {inputInputHandler} /> 
            <Input 
                id = "password"
                element ='input' 
                type= "password" 
                label = "Password" 
                errorText = "Enter a valid password."
                validators = {[VALIDATOR_MINLENGTH(8)]} 
                onInput = {inputInputHandler} /> 
            <Button type="submit" disabled ={!formState.isValid}>Log On</Button>
            <h2>Didn't Have account? <Link to={`/reg`}>SignUP</Link></h2>
     
  </form>
  </Card>
    );

};
export default Login;