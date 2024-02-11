// import React from 'react';

import { Outlet } from "react-router-dom";

import Navigation from "../Pages/Navigation";
import Users from "../Pages/Users/Users";
import SingleUser from "../Pages/SingleUser/SingleUser";
// import SingleUser from "../Pages/SingleUser/SingleUser";
// import SearchUser from "../Pages/SearchUser";


const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <SearchUser></SearchUser> */}
            <SingleUser></SingleUser>
            <Users></Users>          
            <Outlet></Outlet>
        </div>
    );
};

export default Main;