import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
//Components
import Section from "../molecules/Section"
import Grid from "../atoms/Grid"
import Heading from "../atoms/Heading"
import Button from "../atoms/Button"

const TitleHeader = styled.h1`
  margin: 0;
`

const ContentImage = styled.div`
  display: flex;
  justify-content: center;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
`

const ErrorDescription = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`

const Error = ({ image, title, description }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <TitleHeader>{title}</TitleHeader>
        </Heading>
        <ErrorDescription>{description}</ErrorDescription>
        <div>
          <Button as={Link} to="/" color="primary">
            Voltar página inicial
          </Button>
        </div>
      </div>

      <ContentImage>
        <Image src={image} alt="Foto com erro 404" />
      </ContentImage>
    </Grid>
  </Section>
)

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
}

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Error
