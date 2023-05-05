import styled from "styled-components";

export const TaskLi = styled.li`
display: flex;
justify-content: center;
    text-align: center;
    gap: 10px;
`

export const TaskP = styled.p`
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
`

export const TaskButtonDelete = styled.button`
    background-color: unset;
    border: none;
    color: violet;
    font-size: 18px;
    font-weight: 800;
    &:hover {
        cursor: pointer;
    }
`