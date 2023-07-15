import React ,{useCallback,useReducer} from  'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';



const NewPlace = () =>{

    const [formState,titleInputHandler] = useForm({
      title :{
         value: '',
         isValid: false
      },
      description :{
         value: '',
         isValid: false
      },
      Address :{
         value: '',
         isValid: false
      }

     },false);
  

   
   const placeSubmitHandler = event =>{
      event.preventDefault();
      console.log(formState.inputs);

   };

   return (
      <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input 
        id = "title"
        element ='input' 
        type= "text" 
        label = "Title" 
        errorText = "Please provide Valid Input."
        validators = {[VALIDATOR_REQUIRE()]} 
         onInput = {titleInputHandler} /> 
         <Input 
         id = "description"
         element ='textarea' 
         type= "text" 
         label = "Description" 
         errorText = "Please enter a valid description (at least 5 hcaracters)."
         validators = {[VALIDATOR_MINLENGTH(5)]} 
          onInput = {titleInputHandler} /> 
          <Input 
          id = "Address"
          element ='input' 
          type= "text" 
          label = "Address" 
          errorText = "Please enter a valid description (at least 5 hcaracters)."
          validators = {[VALIDATOR_MINLENGTH(5)]} 
           onInput = {titleInputHandler} /> 
          <Button type="submit" disabled= {!formState.isValid}>Add Place</Button>
         
      </form>

   );
};
export default NewPlace;