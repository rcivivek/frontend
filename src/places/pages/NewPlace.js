import React ,{useCallback,useReducer} from  'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PlaceForm.css';

const formReducer = (state, action ) => {
   switch(action.type){
      case 'INPUT_CHANGE':
         let formIsValid = true;
         for(const inputId in state.inputs){
            if(inputId===action.inputId){
               formIsValid = formIsValid && action.isValid;
            }else {
               formIsValid = formIsValid && state.inputs[inputId].isValid;
            }
         }
         return{
            ...state,
            inputs:{
               ...state.inputs,
               [action.inputId]:{value: action.value, isValid: action.isValid}
            },
            isValid: formIsValid
         };
      default:
         return state;
   }
};

const NewPlace = () =>{
    const [formState, dispatch] =useReducer(formReducer, {
      inputs: {
         title: {
            value : '',
            isValid: false
         },
         description: {
            value: '',
            isValid:false
         }
      },
      isValid:false
    });

   const titleInputHandler =useCallback((id,value,isValid) =>{
      dispatch({type:'INPUT_CHANGE', value :value, isValid:isValid,inputId:id})

   },[]);

   
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