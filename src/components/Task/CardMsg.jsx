import React from 'react'
import { Message, MsgContainer } from './CardMsgStyles'

const CardMsg = ({message}) => {
    return (
            <MsgContainer>
                <Message>{message}</Message>
            </MsgContainer>
    )
}

export default CardMsg