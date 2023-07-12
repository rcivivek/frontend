import react from 'react';
import UserItem from './UserList'
import './UserItem.css';
import {Link} from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

const UserList = props => {
    return(
        <li className='user-item'> 
            <Card>
            <Link to={`/${props.id}/Places`}>
                <div className='user-item__image'>
                <Avatar image = {props.image} alt = {props.name} />
                </div>
                <div className='user-item__info'>
                    <h2> {props.name} </h2>
                    <h3> {props.placeCount} {props.placeCount===1 ? 'Place': 'Places' } </h3>
                </div>
            </Link>
            </Card>
        </li>
    );
};
export default UserList;
