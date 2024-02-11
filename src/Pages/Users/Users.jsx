// import React from 'react';
import './Users.css';
import { Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
// import UserCard from '../UserCard/UserCard';

const Users = () => {

    const [allusers, setUsers] = useState([]);
    const [search,setSearch] = useState('')


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data ) => setUsers(data.users));
    }, []);
    const handleSearch = () =>{
        
    }
   
    // console.log(allusers);

    return (
        <Container className='card-griding'>
            <form onSubmit={handleSearch}>
            <input className="border p-2 me-2 mb-4 w-75" type="text"  id="searchField" name="searchField" placeholder="First Name"/>
            <Button type='submit' variant="success">Search</Button>
            </form>

            {
                allusers.map(user => <UserCard
                key = {user.id}
                user = {user}
                
                ></UserCard>)
            }
        </Container>
    );
};

export default Users;