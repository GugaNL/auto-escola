import React from "react"
//import PropTypes from "prop-types"
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"
import styled from "styled-components"
import Container from "../atoms/Container"
import Grid from "../atoms/Grid"
import Heading from "../atoms/Heading"

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`

const IconContainer = styled.span`
  margin-right: 8px;
`

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Lucena Auto Escola</h6>
          </Heading>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium necessitatibus adipisci officia incidunt nam repellat
            commodi, voluptate repudiandae velit esse laudantium voluptates
            facilis sit quibusdam.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (12) 12356-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes sociais</h6>
          </Heading>
          <p>
            <FooterLink
              target="_blank"
              href="https://www.facebook.com/gustavo.nunes.007"
            >
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>

          <p>
            <FooterLink
              target="_blank"
              href="https://www.linkedin.com/in/gustavonuneslucena/"
            >
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              Linkedin
            </FooterLink>
          </p>

          <p>
            <FooterLink target="_blank">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
)

//Footer.defaultProps = {}

//Footer.propTypes = {}

export default Footer
