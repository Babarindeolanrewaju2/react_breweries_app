import React from 'react';

export const ByCity = ({ props }) => (
    <p style={{ margin: 20 }}>name:{props.name} <em onClick={e => {
        props.brewery_type(
            e,
            props.ByCity.brewery_type
        );
    }}>brewery_type:{props.brewery_type}</em> street:{props.street} city:{props.city}</p>

)