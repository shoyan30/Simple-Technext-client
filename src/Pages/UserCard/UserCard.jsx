/* eslint-disable react/prop-types */
// import React from 'react';
import { Card, CardGroup,  } from 'react-bootstrap';
import './UserCard.css';
import { Link } from 'react-router-dom';




const UserCard = ({ user }) => {

    const { firstName, lastName, email, image, id } = user;
    const{address, city} = user.address;
    const {name} = user.company;

    return (
        <CardGroup >
            <Card className='cardDesign'>
                <img className='img' src={image} alt="" />
                <Card.Body>
                    <h2>Name: {firstName} {lastName}</h2>
                    <p>Email: {email}</p>
                    <p>Address: {address} {city}</p>
                    <p>
                       Company Name: {name}
                    </p>
                </Card.Body>
                <Card.Footer>
                
                <Link to={`/seeDetails/${id}`}><button type="button" className="btn btn-warning">See More</button></Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default UserCard;