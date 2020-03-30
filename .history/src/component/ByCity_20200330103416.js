import React from 'react';

export const ByCity = ({ byCity: { name, brewery_type, street, city } }) => (
    <React.Fragment>
        <p style={{ margin: 20 }}>name:{name} <em onClick={e => {
            .props.brewery_type(
                e,
                brewery_type
            );
        }}>brewery_type:{brewery_type}</em> street:{street} city:{city}</p>
    </React.Fragment >

)