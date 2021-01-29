/* eslint-disable max-len */
import React from 'react';

const Settings = () => {
    return (
        <div className="grid grid-flow-row auto-rows-max py-6 gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                <div className="section flex flex-col items-center m-0">
                    <h4>Heading</h4>
                    <p className="py-4">If you press the button below, nothing will happen.</p>
                    <button type="button" className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary mt-auto">
                        Press me
                    </button>
                </div>
                <div className="section flex flex-col items-center m-0">
                    <h4>Second heading</h4>
                    <p className="py-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Sed posuere interdum sem.
                        Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                    <button type="button" className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary mt-auto">
                        Press me
                    </button>
                </div>
                <div className="section flex flex-col items-center m-0">
                    <h4>Third heading</h4>
                    <p className="py-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    <button type="button" className="btn bg-primary border-primary hover:bg-secondary hover:border-secondary mt-auto">
                        Press me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
