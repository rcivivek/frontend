import React, {useState,useContext} from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/context/auth-context';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './PlaceItem.css';

const PlaceItem = props  =>{

    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);

    const [confirmModal, setConfirmModal] = useState(false);

    const openConfirmModalHandler  = () => setConfirmModal(true);
    const closeConfirmModalHandler = () => setConfirmModal(false);

    const onDeleteHandler = () =>{
        setConfirmModal(false);
       console.log('Deleting..');
    };

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
            <Modal show={confirmModal} onCancel={closeConfirmModalHandler} header ="Are you Sure?" footerClass="place-item__modal-actions" footer={
                <React.Fragment>
                    <Button inverse onClick={closeConfirmModalHandler}>CANCEL</Button>
                    <Button danger onClick={onDeleteHandler}>DELETE</Button>
                </React.Fragment>
            }>
                <p>
                    Do you want to proceed and delete this place? Please note that it can't be undone thereafter.
                </p>
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
               {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
                )}

            {auth.isLoggedIn && (
              <Button danger onClick={openConfirmModalHandler}>
                DELETE
              </Button>
            )}
            </div>
            </Card>
            
        </li>
        </React.Fragment>

    );    
};


export default PlaceItem;