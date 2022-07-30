import React from "react";
import { PaginationWrapper, PaginationElement } from "../elements/paginationElements";

export const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    return (
        <PaginationWrapper isFirst={isFirst} isLast={isLast}> 
            <PaginationElement to={prevPage} >Previus Page</PaginationElement>
            <PaginationElement to={nextPage} >Next Page</PaginationElement>
        </PaginationWrapper>
    )
}