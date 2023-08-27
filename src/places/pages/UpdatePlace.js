import React ,{useEffect, useState,useContext} from 'react';
import { useParams,useHistory} from 'react-router-dom/cjs/react-router-dom.min';
// import { useCallback } from 'react';


import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from  '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';

import Card from '../../shared/components/UIElements/Card';

import { AuthContext } from '../../shared/context/auth-context';
import './PlaceForm.css';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const UpdatePlace = () =>{
  const auth = useContext(AuthContext);
  const {isLoading,error,sendRequest,clearError} = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const placeId = useParams().placeId;
  const history = useHistory();


 
  const [formState, inputInputHandler,setFormData] = useForm({
    title:{
      value:'',
      isValid: false
    },
    description:{
      value:'',
      isValid: false
    },
    address:{
      value:'',
      isValid: false }
  },false);

  useEffect(()=>{
      const fetchPlace = async() =>{
        try {
          const responseData = await sendRequest(
            `http://localhost:5000/api/places/${placeId}`
          );
          setLoadedPlace(responseData.place);
        }catch(err) {}
      };
      fetchPlace();
  },[sendRequest,placeId,setFormData]);




  const placeUpdateSubmitHandler = event =>{
    event.preventDefault();
    try{
      sendRequest(`http://localhost:5000/api/places/${placeId}`,'PATCH',
      JSON.stringify({
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
        // address: formState.inputs.address.value
      }),
      {
        "Content-Type":"application/json",
        Authorization: 'Bearer ' + auth.token,
      });
      history.push('/'+ auth.userId +'/places');

    }catch(err){}

 };
 
 if(isLoading){
  return  <div className='center'>
     <h2> <LoadingSpinner asOverlay/></h2>
   </div>

}

   if(!loadedPlace && !error){
    return ( 
    <Card><div className="center">      
         <h2>Could not find Place!</h2>
      </div>
      </Card>
    );}

  

    return(
    <React.Fragment>
    <ErrorModal error={error} onClear = {clearError} />
    {!isLoading && loadedPlace &&
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
       <Input 
       id = "title"
       element ='input' 
       type= "text" 
       label = "Title" 
       errorText = "Please provide Valid Input."
       validators = {[VALIDATOR_REQUIRE()]} 
       onInput={inputInputHandler}
        value = {loadedPlace.title}
        valid = {true} /> 
        <Input 
        id = "description"
        element ='textarea' 
        type= "text" 
        label = "Description" 
        errorText = "Please enter a valid description (at least 5 hcaracters)."
        validators = {[VALIDATOR_MINLENGTH(5)]} 
        onInput={inputInputHandler}
         value={loadedPlace.description}
         valid= {true} /> 
         {/* <Input 
         id = "Address"
         element ='input' 
         type= "text" 
         label = "Address" 
         errorText = "Please enter a valid description (at least 5 hcaracters)."
         validators = {[VALIDATOR_MINLENGTH(5)]} 
         onInput={inputInputHandler}
          value = {loadedPlace.address}
          valid = {true}
          />  */}
         <Button type="submit" >Update Place</Button>

       </form>}
       </React.Fragment>
    );
  
};
export default UpdatePlace;