import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


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
        <h2>UpdatePlace Form</h2>
        
    );
   }
};
export default UpdatePlace;