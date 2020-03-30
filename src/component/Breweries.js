import React from 'react';

export const Breweries = ({ brewery: { name, brewery_type, street, city } }) => (
    <div>
        <p style={{ margin: 20 }}>Name: {name} <em>Brewery type:{brewery_type}</em> Street: {street} City: {city}</p>
    </div>

)