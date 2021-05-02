import React from 'react';

class Spinner extends React.Component
{
    render()
    {
        return (
            <div className="ui segment" style={{ height: '100px', margin: '10px' }}>
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading...</div>
                </div>
                <p></p>
            </div>
        )
    }
};


export default Spinner;