import React from 'react';

class Spinner extends React.Component
{
    render()
    {
        return (
            <div class="ui segment" style={{ height: '100px', margin: '10px' }}>
                <div class="ui active dimmer">
                    <div class="ui text loader">Loading...</div>
                </div>
                <p></p>
            </div>
        )
    }
};


export default Spinner;