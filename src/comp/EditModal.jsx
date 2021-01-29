/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

const EditModal = () => {
    const [ showModal, setShowModal ] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <button type="button" onClick={ toggleModal }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </button>
            { showModal ? (
                <>
                    <div
                        className="modal_container"
                    >
                        <div className="modal">
                            { /* content */ }
                            <div className="section">
                                { /* header */ }
                                <div className="modal_header">
                                    <h4>
                                        Edit user
                                    </h4>
                                    <button
                                        type="button"
                                        className="ml-auto bg-transparent border-0 float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={ toggleModal }
                                    >
                                        <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                { /* body */ }
                                <div className="md:col-span-2">
                                    <form action="#" method="POST">
                                        <div className="grid_form_container">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="input_label">First name</label>
                                                <input type="text" name="firstName" className="input" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="input_label">Last name</label>
                                                <input type="text" name="lastName" className="input" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="input_label">Username</label>
                                                <input type="text" name="userName" className="input" />
                                            </div>
                                            <br />
                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="input_label">Password</label>
                                                <input type="text" name="password" className="input" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="input_label">Password again</label>
                                                <input type="text" name="password" className="input" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="input_label">Access rights</label>
                                                <select name="rights" className="input">
                                                    <option>admin</option>
                                                    <option>read only</option>
                                                    <option>editing rights</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label className="input_label">Status</label>
                                                <select name="status" className="input">
                                                    <option>active</option>
                                                    <option>passive</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label className="input_label">Comments</label>
                                                <textarea type="text" name="comments" className="input" />
                                            </div>
                                        </div>
                                        { /* buttons */ }
                                        <div className="flex items-center justify-end">
                                            <button
                                                className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary ml-2 my-3"
                                                type="button"
                                                onClick={ toggleModal }
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="cancel_btn ml-2 my-3"
                                                type="button"
                                                onClick={ toggleModal }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            ) : null }
        </>
    );
};

export default EditModal;
