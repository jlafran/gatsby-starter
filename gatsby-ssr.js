/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
 import React from "react";
 import { ThemeProvider } from "styled-components";
 import Theme from "./src/themes/theme";
 
 export const wrapRootElement = ({ element }) => (
     //this wraps the entire aplicaton with the themes
     <ThemeProvider theme={Theme}>
         {element} //react aplication
     </ThemeProvider>
 )

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

