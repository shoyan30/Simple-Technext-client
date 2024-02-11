import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Navigation";
import Users from "../Pages/Users/Users";
import SearchUser from "../Pages/SearchUser";
import { useState } from "react";


const Main = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <Navigation></Navigation>
            <SearchUser setSearch={setSearch}></SearchUser>
            <Users search={search}></Users>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;