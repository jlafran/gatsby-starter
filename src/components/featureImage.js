import React from "react";
import Img  from "gatsby-image";
import { useStaticQuery, graphql} from "gatsby";
import { ImageWrapper } from "../elements/imageElements";

export const FeatureImage = ({fixed}) => {
    const data = useStaticQuery(graphql`
    query {
        imageSharp( fixed: {originalName: {eq: "office.jpg"} } ) {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
`)
    return (
        <ImageWrapper> 
            <Img fixed={ fixed ? fixed : data.imageSharp.fixed } 
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    }}
            />
        </ImageWrapper>
    )
}