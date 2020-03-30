import React, { Component } from 'react';

const Breweries = ({ Brewery: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)