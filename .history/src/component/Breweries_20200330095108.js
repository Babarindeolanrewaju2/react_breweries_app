import React from 'react';

export const Breweries = ({ brewery: { name, brewery_type } }) => (
    <p style={{ margin: 20 }}>{name} <em>{brewery_type}</em></p>
)