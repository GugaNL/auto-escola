import React from "react"
//import PropTypes from "prop-types"
import styled from "styled-components"
//Components
import MainHeader from "../molecules/MainHeader"
import Heading from "../atoms/Heading"
import BreadCrumb from "../../components/atoms/BreadCrumb"
import Section from "../molecules/Section"
import Grid from "../atoms/Grid"
import Footer from "../organisms/Footer"
import { CardMedia, CardMediaDesc } from "../molecules/Card"
//Images
import Porsche from "../../assets/porsche.jpg"
import AboutImage from "../../assets/svg/about.svg"
import Bege from "../../assets/driverTeachers/bege.jpg"
import Husky from "../../assets/driverTeachers/husky.jpg"
import Tabby from "../../assets/driverTeachers/malhado.jpg"
import Brown from "../../assets/driverTeachers/marrom.jpg"
import German from "../../assets/driverTeachers/pastor-alemao.jpg"
import Black from "../../assets/driverTeachers/preto-molhado.jpg"

const instructors = [
  { id: 1, name: "Bob", avatar: Bege },
  { id: 2, name: "Tom", avatar: Husky },
  { id: 3, name: "Oliver", avatar: Tabby },
  { id: 4, name: "Rin", avatar: Brown },
  { id: 5, name: "Casper", avatar: German },
  { id: 6, name: "Alfred", avatar: Black },
]

const Image = styled.img`
  width: 100%;
  max-width: 380px;
`

const About = () => {
  return (
    <>
      <MainHeader image={Porsche}>
        <Heading>
          <h1>Auto Escola Lucena</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Sobre", link: "" },
          ]}
        />
      </MainHeader>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              ut totam beatae impedit eius veritatis architecto fuga repellat
              ipsam illo aut consectetur dolorem ea nihil nemo rerum cumque
              eaque officia.
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus cumque soluta.
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              vero itaque voluptatum rem! Molestiae expedita, officia deleniti
              vero facilis assumenda amet a sunt minus, minima suscipit error
              libero magnam voluptatum?
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
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => {
            return (
              <CardMedia key={instructor.id} image={instructor.avatar}>
                <CardMediaDesc>
                  <h5>{instructor.name}</h5>
                </CardMediaDesc>
              </CardMedia>
            )
          })}
        </Grid>
      </Section>
      <Footer />
    </>
  )
}

//About.defaultProps = {}

//About.propTypes = {}

export default About
