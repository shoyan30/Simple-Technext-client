// import React from 'react';

import { useState } from "react";
import { Button, Container } from "react-bootstrap";



const SingleUser = () => {

    const [person, setPerson] = useState();

    const loadUser = async (searchtext) =>{
        const res = await fetch(`http://localhost:5000/users/firstName/${searchtext}`);
        const data = await res.json();
        setPerson(data)
    } 

    const handleSearch = () =>{
        // console.log('handle Search')

        const searchFieldArea = document.getElementById('searchField');

        const searchText = searchFieldArea.value;

        // console.log(searchText);
        loadUser(searchText);
    }


    return (
        <Container>

            {
                 console.log(person)

                // <p>{person.firstName}</p>
            }
            <input className="border p-2 me-2 mb-4 w-75" type="text"  id="searchField" name="searchField" placeholder="First Name"/>
            <Button onClick={handleSearch} variant="success">Search</Button>
        </Container>
    );
};

export default SingleUser;