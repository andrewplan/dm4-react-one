import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

document.addEventListener( 'DOMContentLoaded', () => {
    const reactNode = document.getElementById( 'react-node' );

    // ReactDOM is how React interacts with the DOM
    ReactDOM.render( <App />, reactNode );


} );
