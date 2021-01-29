/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import UserRow from '../comp/UserRow';
import UserData from '../data/UserData.json';
import useSearch from '../hooks/useSearch';

const UserControl = () => {
    const [ users, setUsers ] = useState([]);
    const [ sortConfig, setSortConfig ] = useState({ key: null, dir: 'asc' });

    const options = {
        minMatchCharLength: 2,
        threshold: 0.4,
        keys: [ 'fullName', 'userName' ],
    };

    const search = useSearch('text');

    const mapUsers = (user) => {
        return {
            fullName: user.fullName,
            userName: user.userName,
            comments: user.comments,
            rights: user.rights,
            status: user.status,
        };
    };

    useEffect(() => {
        setUsers(UserData.map(mapUsers));
    }, [ UserData ]);

    const fuse = new Fuse(users, options);

    const result = fuse.search(search.value);

    const filteredUsers = (search.value !== '') ? result.map((a) => ({ ...a.item })) : users;

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (sortConfig.key !== null) {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return (sortConfig.dir === 'asc') ? -1 : 1;
            }

            if (a[sortConfig.key] > b[sortConfig.key]) {
                return (sortConfig.dir === 'asc') ? 1 : -1;
            }

            return 0;
        }
        return 0;
    });

    const requestSort = (key) => {
        let dir = 'asc';

        if (sortConfig.key === key && sortConfig.dir === 'asc') {
            dir = 'desc';
        }

        setSortConfig({ key, dir });
    };

    const getClassName = (name) => (sortConfig.key === name ? `table-button sort-btn active ${ sortConfig.dir }` : 'table-button sort-btn');

    return (
        <>
            <div className="list">
                <div>
                    <input type="text" placeholder="Search.." { ...search } className="search border-b-2 mx-4 my-5" />
                </div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left min-w-xxxs table-heading">
                                <button type="button" onClick={ () => requestSort('fullName') } className={ getClassName('fullName') }>
                                    Name
                                </button>
                            </th>
                            <th className="table-heading">
                                <button type="button" onClick={ () => requestSort('userName') } className={ getClassName('userName') }>
                                    Username
                                </button>
                            </th>
                            <th className="table-heading">
                                <button type="button" onClick={ () => requestSort('comments') } className={ getClassName('comments') }>
                                    Comments
                                </button>
                            </th>
                            <th className="table-heading">
                                <button type="button" onClick={ () => requestSort('rights') } className={ getClassName('rights') }>
                                    Access rights
                                </button>
                            </th>
                            <th className="table-heading">
                                <button type="button" onClick={ () => requestSort('status') } className={ getClassName('status') }>
                                    Status
                                </button>
                            </th>
                            <th className="table-heading"> </th>
                            <th className="table-heading"> </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y">
                        {
                            sortedUsers.map((user) => (
                                <UserRow
                                    key={ user.userName }
                                    { ...user }
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserControl;
