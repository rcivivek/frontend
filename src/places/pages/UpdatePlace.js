import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from  '../../shared/util/validators';

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
   const placdId = useParams().placdId;

   const identifiedPlace = DUMMY_PLACES.find(p=>p.id==placeId);

   if(!identifiedPlace){
    return ( 
        <div className='center'>
            <h2>Could not find Place!</h2>
        </div>

    );
    return(
       <form>
       <Input 
       id = "title"
       element ='input' 
       type= "text" 
       label = "Title" 
       errorText = "Please provide Valid Input."
       validators = {[VALIDATOR_REQUIRE()]} 
        onInput = {titleInputHandler} 
        value = {identifiedPlace.title}
        valid = {true} /> 
        <Input 
        id = "description"
        element ='textarea' 
        type= "text" 
        label = "Description" 
        errorText = "Please enter a valid description (at least 5 hcaracters)."
        validators = {[VALIDATOR_MINLENGTH(5)]} 
         onInput = {titleInputHandler}
         value={identifiedPlace.description}
         valid= {true} /> 
         <Input 
         id = "Address"
         element ='input' 
         type= "text" 
         label = "Address" 
         errorText = "Please enter a valid description (at least 5 hcaracters)."
         validators = {[VALIDATOR_MINLENGTH(5)]} 
          onInput = {titleInputHandler} 
          value = {identifiedPlace.address}
          valid = {true}
          /> 
         <Button type="submit" disabled= {true}>Update Place</Button>

       </form>
        
    );
   }
};
export default UpdatePlace;