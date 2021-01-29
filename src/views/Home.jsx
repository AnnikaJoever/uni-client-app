import React from 'react';

const Home = () => {
    return (
        <div className="grid grid-flow-row auto-rows-max py-6 gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                <div className="section flex flex-col items-center m-0">
                    <h4>Welcome</h4>
                    <p className="py-4">If you press the button below, nothing will happen.</p>
                    <button type="button" className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary mt-auto">
                        Press me
                    </button>
                </div>
                <div className="section flex flex-col items-center m-0">
                    <h4>Info</h4>
                    <p className="py-4">This is just a dummy site. You can search and sort the product info and users, but you can not edit or delete users.</p>
                    <button type="button" className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary mt-auto">
                        Press me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
