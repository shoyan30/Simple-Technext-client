// import React from 'react';

import { Button, Container } from "react-bootstrap";

const SearchUser = () => {
    const handlesearch = event =>{
        event.preventDefault();
        const form = event.target;
       const firstName = form.firstname.value;
       const SecondtName = form.secondname.value;
       

       console.log(firstName, SecondtName);
    }


    return (
        <Container>
            <form onSubmit={handlesearch}>
                <h3>Search User</h3>
                <input className="border mb-2 max-w-screen-lg" type="text" name="firstname" id="firstname" placeholder="First Name" /> <br />

                <input className="border mb-2" type="text" name="secondname" id="secondname" placeholder="Second Name" /><br />

                <Button className="mb-2" variant="primary" type="submit">
                    Search
                </Button>
            </form>
        </Container>
    );
};

export default SearchUser;