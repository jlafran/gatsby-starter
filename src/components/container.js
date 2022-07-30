import React from "react";
import { ContainerWrapper } from "../elements/containerElements";
import { Footer } from "./footer";
import {Nav} from "./nav"

export const Container = ({children}) => {
    return (
        <ContainerWrapper> 
            <Nav/>
                {children} 
            <Footer/>
        </ContainerWrapper>
    )
}