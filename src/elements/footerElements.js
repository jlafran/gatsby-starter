import styled from "styled-components";

export const FooterWrapper = styled.nav`
    grid-column: 2 / span 12; // empieza en la columna 2 y va hasta la 12
    min-height: 11.25rem;
    padding: 3rem 0;
    justify-content: center;
    display: flex;
    align-items: flex-start;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    & p {
        text-align: center;
        flex: 0 0 100%;
    }
`

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;
    padding: 0 1rem; 
    

    & img {
        transition: filter 0.3s ease;
        width: 30px;
        margin-right:1rem
    }

    & img:hover, 
    & img:focus {
        filter: brightness( 50% );
    }
`