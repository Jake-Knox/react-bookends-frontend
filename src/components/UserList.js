import React from 'react';
import { Link } from 'react-router-dom';

import usersData from '../data';

const UserList = () => {



    return (
        <div>
            <h2>UserList</h2>
            <ul className='user-list'>
                {usersData.map((user) => (
                    <li
                        key={user.id}
                    >
                        <Link to={`/user/${user.name}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;