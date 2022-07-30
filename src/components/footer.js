import React from "react";
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from "../elements/footerElements";
import { useStaticQuery, graphql} from "gatsby";
import {P} from "../elements/typographyElements"

export const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath: {eq: "facebook.svg"}) {
                publicURL
            }

            instagram: file(relativePath: {eq: "instagram.svg"}) {
                publicURL
            }

            twitter: file(relativePath: {eq: "twitter.svg"}) {
                publicURL
            }

            linkedin: file(relativePath: {eq: "linkedin.svg"}) {
                publicURL
            }
        }
    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>

                    <a href="https://facebook.com" target="__blank" rel=" noopener noreferrer">
                        <img src={data.facebook.publicURL} alt= "Facebook Logo"/>
                    </a>

                    <a href="https://twitter.com" target="__blank" rel=" noopener noreferrer">
                        <img src={data.twitter.publicURL} alt= "Twitter Logo"/>
                    </a>

                    <a href="https://linkedin.com" target="__blank" rel=" noopener noreferrer">
                        <img src={data.linkedin.publicURL} alt= "Linkedin Logo"/>
                    </a>

                    <a href="https://instagram.com" target="__blank" rel=" noopener noreferrer">
                        <img src={data.instagram.publicURL} alt= "Instagram Logo"/>
                    </a>

                </FooterSocialIcons>
                <P size= "xSmall" color="dark3" >© 2022 Juan Cruz Lafranconi.  All rights reserved. </P>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}
