import React from 'react';

export const Breweries = ({ brewery: { name, brewery_type, street, c ity } }) => (
    <p style={{ margin: 20 }}>name:{name} <em>brewery_type:{brewery_type}</em> street:{street} city:{city}</p>
)