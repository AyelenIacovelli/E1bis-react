import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        background: black;
        color: white;
        overflow-x: hidden;   
    }
`;