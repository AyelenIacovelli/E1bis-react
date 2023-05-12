import styled from "styled-components";

export const HeaderContainerStyled = styled.header`
    display: flex;
    height: 80px;
    background-color: brown;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const NavbarContainerStyled = styled.nav`
    width: 100%;
    max-width: 1200px;
    display: flex;
    gap: 25px;
`
export const ListaContainerStyled = styled.ul`
    display: flex;
`
export const LinksContainerStyled = styled.li`
    color: white;
    a{
        padding: 5px;
    }
`


export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#ff9d01' : '#ff9300')};
`;