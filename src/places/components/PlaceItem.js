import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './PlaceItem.css';

const PlaceItem = props  =>{
    return (
        <li className='place-item'>
            <Card className= 'place-item__content'>
            <div className='place-item__image'>
                <img src={props.image} alt={props.item}/>         
            </div>
            <div className='place-item__info'>
                <h2>{props.title}</h2>
                <h3>{props.add}</h3>
                <p>{props.desc}</p>

            </div>
            <div className='place-item__actions'>
               <Button inverse>View On Map</Button>
               <Button to ={``}>EDIT</Button>
               <Button danger>DELETE</Button>
            </div>
            </Card>
            
        </li>

    );    
};


export default PlaceItem;