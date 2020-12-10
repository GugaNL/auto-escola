import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
//Components
import MainHeader from "../molecules/MainHeader"
import Heading from "../atoms/Heading"
import Section from "../molecules/Section"
import Grid from "../atoms/Grid"
import Footer from "../organisms/Footer"
//Images
import Porsche from "../../assets/porsche.jpg"
import AboutImage from "../draws/about.svg"

const Image = styled.img`
  width: 100%;
  max-width: 380px;
`

const About = () => (
  <>
    <MainHeader image={Porsche}>
      <Heading>
        <h1>Auto Escola Lucena</h1>
      </Heading>
    </MainHeader>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ut
            totam beatae impedit eius veritatis architecto fuga repellat ipsam
            illo aut consectetur dolorem ea nihil nemo rerum cumque eaque
            officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            alias voluptatum natus tempora, sint, odio cum architecto quasi
            minima dignissimos et provident nihil, atque minus fuga. Libero,
            repellendus! Ipsa, exercitationem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cumque voluptatem rem consectetur? Quisquam esse hic laboriosam
            voluptatibus. Ea explicabo ipsa doloremque iste beatae. Eligendi
            porro minus ab eius minima.
          </p>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              cumque soluta.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              delectus facilis.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              officia, veniam dolorum sequi maiores magni enim.{" "}
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim vero
            itaque voluptatum rem! Molestiae expedita, officia deleniti vero
            facilis assumenda amet a sunt minus, minima suscipit error libero
            magnam voluptatum?
          </p>
          <center>
            <Image
              src={AboutImage}
              alt="Imagem de 2 carros cruzando um prédio"
            />
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            provident velit expedita ipsa ut odit veniam, possimus explicabo
            minus! Aliquam officiis enim esse labore obcaecati est deleniti
            impedit, quo rerum?
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, ad
            obcaecati. Laborum natus nesciunt, dicta architecto consequatur
            quibusdam itaque repudiandae, laboriosam, obcaecati ullam ipsum ea
            amet nihil modi reiciendis doloribus?
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h3>Conheça nossos professores</h3>
      </Heading>
    </Section>
    <Footer />
  </>
)

About.defaultProps = {}

About.propTypes = {}

export default About
