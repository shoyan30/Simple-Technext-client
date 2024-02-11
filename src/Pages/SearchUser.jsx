/* eslint-disable react/prop-types */
// import React from 'react';

import { Button, Container } from "react-bootstrap";

const SearchUser = ({ setSearch }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.searchField.value);
    }

    return (
        <Container>
            <form onSubmit={handleSearch} className="w-full flex items-center space-x-2 my-2">
                <input className="py-1 border border-gray-200 rounded-md flex-1 px-2" type="text" id="searchField" name="searchField" placeholder="Name" />
                <Button type='submit' variant="success">Search</Button>
            </form>
        </Container>
    );
};

export default SearchUser;