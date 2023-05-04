import styled from "styled-components";

export const TaskTitle = styled.h1`
    font-size: 24px;
    text-align: center;
`

export const TaskForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
`

export const TaskInput = styled.input`
    padding: 5px 12px;
    border: none;
    outline: none;
    background-color: beige;
    color: black;
`

export const TaskButton = styled.button`
    border-radius: 1 rem;
    background-color: orangered;
    padding: 3px 6px;
    &:hover {
        cursor: pointer;
    }
`