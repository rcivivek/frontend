import React, {useState} from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './PlaceItem.css';

const PlaceItem = props  =>{
    const [showMap, setShowMap] = useState(false);
    const openMapHandler =() =>setShowMap(true);
    const closeMapHandler = () => setShowMap(false);
    return (
        <React.Fragment>
            <Modal show={showMap} onCancel ={closeMapHandler}    
            header={props.address}     
            contentClass="place-item__modal-content"
            footerClass = "Place-item__modal-actions"
            footer={ <Button onClick ={closeMapHandler}>Close</Button> }
            >
                <div className='map-container'>
                   <h2>The Map!</h2>
                </div>
            </Modal>
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
               <Button inverse onClick={openMapHandler}>View On Map</Button>
               <Button to ={``}> <Link to={`/places/${props.id}`}>EDIT</Link> </Button>
               <Button danger>DELETE</Button>
            </div>
            </Card>
            
        </li>
        </React.Fragment>

    );    
};


export default PlaceItem;