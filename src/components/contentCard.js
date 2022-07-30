import React from "react";
import { CardWrapper } from "../elements/cardElements";
import {H2, P} from "../elements/typographyElements"
import { Button } from "./button";

export const ContentCard = ({date,title,excerpt,slug}) => {
    return (
        <CardWrapper>
            <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="dark2" >
                {date}
            </P>

            <H2 textAlign="center" margin="0 0 1rem 0">
                {title}
            </H2>

            <P size="small" textAlign="center" margin="0 0 1.5rem 0" color="dark2" >
                {excerpt}
            </P>

            <Button href={slug}>Read More</Button>
        </CardWrapper>
    )
}
