import React from "react"
import { Container } from "../components/container"
import { FeatureImage } from "../components/featureImage"
import {Content} from "../components/content"
import {ContentCard} from "../components/contentCard"

const IndexPage = () => {
  return(
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard 
          date="22/2/2022"
          title="First Blog"
          excerpt="Heloooasas"
          slug="/test"
          />
      </Content>
    </Container>
  )
}

export default IndexPage