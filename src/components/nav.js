import React from "react";
import { NavWrapper, NavLogo } from "../elements/navElements";
import { useStaticQuery, Link, graphql} from "gatsby";

export const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "car-lite.svg"}) {
                publicURL
            }
        }
    `)
    return (
        <NavWrapper>
            <Link to="/">
                <NavLogo src={data.logo.publicURL} alt="My Logo"/>
            </Link>
        </NavWrapper>
    )
}
