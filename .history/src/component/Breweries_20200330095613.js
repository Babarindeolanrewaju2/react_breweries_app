import React from 'react';

export const Breweries = (props) => (
    <p style={{ margin: 20 }}>{props.brewery.name} <em>{props.brewery_type}</em></p>
)