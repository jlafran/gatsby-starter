/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";

export const wrapRootElement = ({ element }) => (
    //this wraps the entire aplicaton with the themes
    <ThemeProvider theme={Theme}>
        {element} //react aplication
    </ThemeProvider>
)