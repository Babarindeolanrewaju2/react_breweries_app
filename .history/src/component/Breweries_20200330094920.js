import React, { Component } from 'react';

export const Breweries = ({ brewery: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)