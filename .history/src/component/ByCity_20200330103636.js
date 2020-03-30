import React from 'react';

export const ByCity = ({ props }) => (
    <p style={{ margin: 20 }}>name:{props.name} <em onClick={e => {
        props.brewery_type(
            e,
            brewery_type
        );
    }}>brewery_type:{san_diego.brewery_type}</em> street:{street} city:{city}</p>

)