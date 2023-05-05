import React from 'react'
import { Container } from './GeneralWrapperStyles'

const GeneralWrapper = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}

export default GeneralWrapper