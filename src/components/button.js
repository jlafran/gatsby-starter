import React from "react";
import {ButtonWrapper} from "../elements/buttonElements"

export const Button= ({children, href}) => {
    return <ButtonWrapper to={href}>{children}</ButtonWrapper>
}