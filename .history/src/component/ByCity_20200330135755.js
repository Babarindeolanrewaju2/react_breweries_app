import React from 'react';

export const ByCity = (props) => (
    <div>
        <p style={{ margin: 20 }}>Name: {props.byCity.name} <em onClick={e => {
            props.getBreweryByType(
                e,
                props.byCity.brewery_type
            );
        }}>Brewery type: {props.byCity.brewery_type}</em></p>
        <p>Street: {props.byCity.street}</p>
        <p> City: {props.byCity.city}</p>
    </div>


)