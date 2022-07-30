exports.createPages = async ({ actions, graphql }) => {
  const {data} = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  //create paginated pages for post
  const postsPerPage = 3

  //Math.ceil redondea para arriba cuando da con coma
  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)

  // creates an array the length is the number of pages and for each uses _ to bypass putting a variable an i as index
  Array.from({length: numPages}).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` :  `/${i + 1}`,
      component:require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      }

    })
  }
  )

  /** 
   Explained
   actions is used to access createPages
   path (url): if the index = 0  the path is "/", if not then is the value of index + 1
   component: is the template
   context: is the information that is send to the template
      limit: only pass and return n items
      skip: how many posts it must skip
  */

//   //Create single blog post, this fetches the information asked in allmdx query at the top
//   data.allMdx.edges.forEach( edge =>{
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id
//     actions.createPages({
//         path: slug,
//         component: require.resolve("./src/templates/singlePost.js"),
//         context: {id},
//       })
//     }
//   )


}

  /** 
  exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
  */