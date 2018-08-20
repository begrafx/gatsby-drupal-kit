

export const ArticleNode = graphql`
fragment ArticleNode on node__article { 
  title
      body {
        value
      }
      path {
        alias
      }
      fields {
        slug
      }
      relationships {
        field_tags {
          name
        }
        field_image {
          localFile {
            childImageSharp {
                  fluid(maxWidth: 470, maxHeight: 353) {
                    ...GatsbyImageSharpFluid
                  }
                }
          }
        }
      }
}
`;

export const pageQuery = graphql`
query {
  allTaxonomyTermTags {
    edges {
      node {
        name
        tid
        path {
          alias
        }
      }
    }
  }
  allNodeArticle {
     edges {
       node {
         ...ArticleNode
       }
     }
   }
 }
`



