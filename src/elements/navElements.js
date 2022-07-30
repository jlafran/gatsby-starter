import styled from "styled-components";

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12; // empieza en la columna 2 y va hasta la 12
    grid-row: 1 / 2; // empieza en la arriba y va hasta la fila 2
    display: flex;
    align-items: center;

    & img {
        height: 50px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const NavLogo = styled.img`
    height: 60px;
`
