import React, { Component } from 'react';

const Breweries = ({ brewery: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)