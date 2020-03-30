import React from 'react';

export const Breweries = ({ brewery: { name, brewery_type, street } }) => (
    <p style={{ margin: 20 }}>{name} <em>{brewery_type}</em> {stret}</p>
)