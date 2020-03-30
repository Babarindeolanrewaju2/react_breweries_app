import React from 'react';

export const ByCity = ({ byCity: { name, brewery_type, street, city } }) => (
    <p style={{ margin: 20 }}>name:{name} <em onClick={this.props.getBreweryByType()}>brewery_type:{brewery_type}</em> street:{street} city:{city}</p>
)