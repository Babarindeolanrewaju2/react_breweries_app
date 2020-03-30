import React from 'react';

export const ByTity = ({ brewery: { name, brewery_type, street, city } }) => (
    <div>
        <p style={{ margin: 20 }}>name:{name} <em>brewery_type:{brewery_type}</em> street:{street} city:{city}</p>
    </div>

)