import styled from "styled-components";

export const TaskTitle = styled.h1`
    font-size: 26px;
    text-align: center;
`

export const TaskForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    gap: 10px;
    width: 100vw;
`

export const TaskInput = styled.input`
    padding: 5px 12px;
    border: none;
    outline: none;
    background-color: beige;
    color: black;
    width: 50%;
    border-radius: 1rem;
`

export const TaskButton = styled.button`
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 0.8rem;
    background-color: green;
    color: white;
    padding: 7px 14px;
    &:hover {
        cursor: pointer;
    }
`