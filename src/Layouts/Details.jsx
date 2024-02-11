// import React from 'react';

import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Navigation";

const Details = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Details;