import React from "react";
import { graphql } from "gatsby";
import { Container, Content, ContentCard, FeatureImage, Pagination } from "../components";
import { H1, P } from "../elements";

const allPost = ({pageContext, data})=>{
    const {currentPage, numPages} = pageContext;
    const isFirst= currentPage === 1;
    const isLast =currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage-1}`
    const nextPage = `/${currentPage+1}`

    const posts= data.allMdx.edges;
    return(
        <Container>
            <FeatureImage/>
            <Content>

                <H1 textAlign="center" margin="0 0 1rem 0">
                    "hdoasdnkandjasdnajdjakjdn"
                </H1>

                <P color="dark2" textAlign="center">
                    "Lorem ipsumdsads d sa  sdsa  sa sd asd sd"
                </P>

                {posts.map(post=>(
                    <ContentCard
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        slug={post.node.frontmatter.slug}
                    ></ContentCard>
                ))}
            </Content>
            <Pagination 
                isFirst={isFirst}
                isLast={isLast}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Container>
    )
}

export default allPost;

export const pageQuery = graphql`
    query AllPostQuery( $skip: Int!, $limit: Int! ){

      allMdx(sort: {fields: frontmatter___date, order: DESC}, 
        skip: $skip, 
        limit: $limit
        ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MM/DD/YYYY")
              excerpt
              slug
              title
            }
          }
        }
      }
    }
`