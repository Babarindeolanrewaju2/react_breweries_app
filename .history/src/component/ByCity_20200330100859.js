import React from 'react';

export const ByCity = ({ by_city: { name, brewery_type, street, city } }) => (
    <p style={{ margin: 20 }}>name:{name} <em>brewery_type:{brewery_type}</em> street:{street} city:{city}</p>
)