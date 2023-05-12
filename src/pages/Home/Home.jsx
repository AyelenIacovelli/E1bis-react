import React from 'react'
import { HomeContainerStyled, HomeParrafo, HomeTitle, LinksContainer } from './HomeStyles'

const Home = () => {
    return (
        <HomeContainerStyled>
            <HomeTitle>INDEX</HomeTitle>
            <HomeParrafo>No olvides hacer la tarea!</HomeParrafo>
            <LinksContainer>
                <a>Checkeá tu lista de tareas</a>
                <a>Estudiá la Pokedex</a>
            </LinksContainer>
        </HomeContainerStyled>
    )
}

export default Home