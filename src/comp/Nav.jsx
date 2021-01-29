import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [ listOpen, setListOpen ] = useState(false);

    return (
        <>
            <div className="flex flex-col h-full bg-primary max-w-xxs">
                <div className="flex items-center min-h-xxxs max-h-xxxs p-5 max-w-xxs">
                    <img src="/uni-client-app/clogo.png" alt="logo" />
                </div>
                <div className="flex flex-col">
                    <NavLink to="/uni-client-app/home" className="nav-link" activeClassName="bg-primary-dark">
                        Home
                    </NavLink>
                    { /* onClick event for opening and closing the sublinks */ }
                    <button type="button" className="nav-link flex items-center outline-none focus:outline-none text-left" onClick={ () => setListOpen(!listOpen) }>
                        Product lists
                        { listOpen ? (
                            <svg className="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg className="h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                            </svg>
                        ) }
                    </button>
                    { /* If true, show sublinks, else hide sublinks */ }
                    <div className={ listOpen ? 'flex flex-col' : 'hidden' }>
                        <NavLink to="/uni-client-app/balance" className="nav-sublink" activeClassName="bg-primary-dark">
                            Product info
                        </NavLink>
                    </div>
                    <NavLink to="/uni-client-app/user" className="nav-link" activeClassName="bg-primary-dark">
                        User management
                    </NavLink>
                    <NavLink to="/uni-client-app/settings" className="nav-link" activeClassName="bg-primary-dark">
                        Settings
                    </NavLink>
                </div>
                <div className="nav-link mt-auto mb-4">
                    <p className="">
                        Log out
                    </p>
                </div>
            </div>
        </>
    );
};

export default Nav;
