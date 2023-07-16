import React from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";

import Button from "../../shared/components/FormElements/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import './PageForm.css'

const Registration= () =>{

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

    return (<form className='place-form' onSubmit={formSubmitHandler} >
            <Input 
                id = "fullname"
                element ='input' 
                type= "text" 
                label = "Full Name" 
                errorText = "Please enter Valid username."
                validators = {[VALIDATOR_REQUIRE()]} 
                onInput = {inputInputHandler} /> 
                <Input 
                    id = "username"
                    element ='input' 
                    type= "text" 
                    label = "Username" 
                    errorText = "Please enter Valid username."
                    validators = {[VALIDATOR_REQUIRE()]} 
                    onInput = {inputInputHandler} /> 
                <Input 
                        id = "email"
                        element ='input' 
                        type= "text" 
                        label = "Email" 
                        errorText = "Please enter valid email address."
                        validators = {[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]} 
                        onInput = {inputInputHandler} /> 
            <Input 
                id = "password"
                element ='input' 
                type= "password" 
                label = "Password" 
                errorText = "Enter a valid password."
                validators = {[VALIDATOR_MINLENGTH(8)]} 
                onInput = {inputInputHandler} /> 
            <Button type="submit" disabled={!formState.isValid} >Registration</Button>
            <h2>I have an account. <Link to={`/auth`}>Login</Link></h2>
     
  </form>
    );

};
export default Registration;