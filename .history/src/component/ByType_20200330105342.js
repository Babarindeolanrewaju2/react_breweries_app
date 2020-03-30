import React from 'react';

export const ByType = ({ byType: { name, brewery_type, street, city } }) => (
    <div>
        <p style={{ margin: 20 }}>name:{name} <em>brewery_type:{brewery_type}</em> street:{street} city:{city}</p>
    </div>

)