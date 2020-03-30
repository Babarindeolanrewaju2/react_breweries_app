import Reactfrom 'react';

export const Breweries = ({ name, brewery_type }) => (
    <p style={{ margin: 20 }}>{name} <em>{brewery_type}</em></p>
)