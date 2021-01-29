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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
                                    <button
                                        type="button"
                                        className="p-1 ml-auto bg-transparent border-0 float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={ toggleModal }
                                    >
                                        <span className="bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                { /* body */ }
                                <div className="text-center">
                                    <p className="my-4 text-gray-800 text-lg font-medium">
                                        Are you sure you want to delete this user?
                                    </p>
                                </div>
                                { /* footer */ }
                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-red-700 text-white font-bold uppercase px-6 py-3 rounded text-sm border border-red-700 hover:bg-red-800 m-2 shadow"
                                        type="button"
                                        onClick={ toggleModal }
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="bg-white text-gray-700 font-bold uppercase px-6 py-3 rounded text-sm border border-gray-300 hover:bg-gray-100 m-2 shadow"
                                        type="button"
                                        onClick={ toggleModal }
                                    >
                                        Cancel
                                    </button>
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
