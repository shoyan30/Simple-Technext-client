import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import UserCard from '../UserCard/UserCard';
import './Users.css'

const Users = ({ search }) => {
    const [allusers, setUsers] = useState([]);
    const [sortBy, setSortBy] = useState('name');

    useEffect(() => {
        let apiUrl = `http://localhost:5000/users?sort=${encodeURIComponent(sortBy)}`;

        if (search) {
            apiUrl += `&search=${encodeURIComponent(search)}`;
        }

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setUsers(data.users));
    }, [search, sortBy]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <Container>
            <form className="mb-3">
                <label htmlFor="sortSelect">Sort by:</label>
                <select className='border border-gray-200 rounded-md px-2 py-1 ml-2' value={sortBy} onChange={handleSortChange}>
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="company.name">Company Name</option>
                </select>
            </form>
            <div className='card-griding'>
                {
                    allusers.map(user => <UserCard
                        key={user.id}
                        user={user}
                    ></UserCard>)
                }
            </div>
        </Container>
    );
};

export default Users;
