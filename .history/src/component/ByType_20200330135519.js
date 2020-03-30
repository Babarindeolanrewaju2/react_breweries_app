import React from 'react';

export const ByType = ({ byType: { name, brewery_type, street, city } }) => (
    <div>
        <p style={{ margin: 20 }}>Name: {name} <em>Brewery type: {brewery_type}</em> Street: {street} city:{city}</p>
    </div>

)