/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
/* // For real data
import axios from 'axios';
import { io } from 'socket.io-client';
*/
import Fuse from 'fuse.js';

import BalanceRow from '../comp/BalanceRow';
import useSearch from '../hooks/useSearch';

// For mock data
import MockData from '../data/MOCK_DATA.json';

const Balance = () => {
    const [ items, setItems ] = useState([]);
    const [ sortConfig, setSortConfig ] = useState({ key: null, dir: 'asc' });
    const [ loading, setLoading ] = useState(true);
    /* // For real data
    const [ socket, setSocket ] = useState(null);
    */

    const options = {
        minMatchCharLength: 2,
        threshold: 0.4,
        keys: [ 'name', 'code' ],
    };

    const search = useSearch('text');

    // For mock data
    const mapBalance = (item) => {
        return {
            name: item.name,
            code: item.code,
            color: item.color,
            prize: item.prize,
            storage: item.storage,
            ordered: item.ordered,
            sold: item.sold,
        };
    };

    // For mock data
    useEffect(() => {
        setItems(MockData.map(mapBalance));
        setLoading(false);
    }, [ MockData ]);

    /* // For real data
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL)
            .then((response) => {
                setItems(response.data.map(mapBalance));
            });
        setSocket(io('http://localhost:3001', {
            query: {
                source: 'view',
            },
        }));
    }, []); */

    /* // For real data
    useEffect(() => {
        if (!socket) return;

        socket.on('data-update', () => {
        });
    }, [ socket ]); */

    if (loading) {
        return (
            <div className="bg-white rounded-lg shadow mt-6 p-4 h-16 flex justify-center items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Collecting data
            </div>
        );
    }

    const fuse = new Fuse(items, options);

    const result = fuse.search(search.value);

    const filteredItems = (search.value !== '') ? result.map((a) => ({ ...a.item })) : items;

    const sortedItems = filteredItems.sort((a, b) => {
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
        <div className="list">
            <div>
                <input type="text" placeholder="Search.." { ...search } className="search border-b-2 mx-4 my-5" />
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left min-w-xxs table-heading">
                            <button type="button" onClick={ () => requestSort('name') } className={ getClassName('name') }>
                                Product name
                            </button>
                        </th>
                        <th className="table-heading">
                            <button type="button" onClick={ () => requestSort('code') } className={ getClassName('code') }>
                                Product code
                            </button>
                        </th>
                        <th className="table-heading">
                            <button type="button" onClick={ () => requestSort('color') } className={ getClassName('color') }>
                                Color
                            </button>
                        </th>
                        <th className="table-heading">
                            <button type="button" onClick={ () => requestSort('prize') } className={ getClassName('prize') }>
                                Prize
                            </button>
                        </th>
                        <th className="table-heading">
                            <button type="button" onClick={ () => requestSort('storage') } className={ getClassName('storage') }>
                                Storage quantity
                            </button>
                        </th>
                        <th className="table-heading">
                            <button type="button" onClick={ () => requestSort('ordered') } className={ getClassName('ordered') }>
                                Ordered
                            </button>
                        </th>
                        <th className="table-heading">
                            <button type="button" onClick={ () => requestSort('sold') } className={ getClassName('sold') }>
                                Sold
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y">
                    {
                        sortedItems.map((item) => (
                            <BalanceRow
                                key={ item.code }
                                { ...item }
                            />
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Balance;
