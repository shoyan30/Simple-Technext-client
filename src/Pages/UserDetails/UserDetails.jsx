// import React from 'react';

import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";



const UserDetails = () => {

    const details = useLoaderData()

    // console.log(details);

    const { firstName, lastName, email, image } = details;
    const { address, city } = details.address;
    const { name } = details.company;

    return (
        <Container>
            <img src={image} alt="" />
            <h2>Name: {firstName} {lastName}</h2>
            <p>Email: {email}</p>
            <p>Address: {address} {city}</p>
            <p>
                Company Name: {name}
            </p>
        </Container>
    );
};

export default UserDetails;