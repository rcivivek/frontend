import React ,{useEffect, useState} from 'react';
import { useParams} from 'react-router-dom/cjs/react-router-dom.min';
import { useCallback } from 'react';


import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from  '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';

import Card from '../../shared/components/UIElements/Card';

import './PlaceForm.css';

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];

const UpdatePlace = () =>{
  const placeId = useParams().placeId;

  const[isLoading, setIsLoading] = useState(true);

 
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

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);


  useEffect(() => {
    if(identifiedPlace){
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );

    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);




  const placeUpdateSubmitHandler = event =>{
    event.preventDefault();
    console.log(formState.inputs);

 };


   if(!identifiedPlace){
    return ( <Card><div className="center">      
         <h2>Could not find Place!</h2>
      </div>
      </Card>
    );}

    if(isLoading){
      return  <div className='center'>
         <h2>Loading...!</h2>
       </div>

    }

    return(<form className='place-form' onSubmit={placeUpdateSubmitHandler}>
       <Input 
       id = "title"
       element ='input' 
       type= "text" 
       label = "Title" 
       errorText = "Please provide Valid Input."
       validators = {[VALIDATOR_REQUIRE()]} 
       onInput={inputInputHandler}
        value = {identifiedPlace.title}
        valid = {true} /> 
        <Input 
        id = "description"
        element ='textarea' 
        type= "text" 
        label = "Description" 
        errorText = "Please enter a valid description (at least 5 hcaracters)."
        validators = {[VALIDATOR_MINLENGTH(5)]} 
        onInput={inputInputHandler}
         value={identifiedPlace.description}
         valid= {true} /> 
         <Input 
         id = "Address"
         element ='input' 
         type= "text" 
         label = "Address" 
         errorText = "Please enter a valid description (at least 5 hcaracters)."
         validators = {[VALIDATOR_MINLENGTH(5)]} 
         onInput={inputInputHandler}
          value = {identifiedPlace.address}
          valid = {true}
          /> 
         <Button type="submit"  disabled= {!formState.isValid}>Update Place</Button>

       </form>
        
    );
  
};
export default UpdatePlace;