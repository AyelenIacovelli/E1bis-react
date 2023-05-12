import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import React from 'react'
import Home from '../pages/Home/Home';

const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='Pokemonapi' />
            <Route path='/home' element={<Home />} />
        </ReactDomRoutes>
    )
}

export default Routes