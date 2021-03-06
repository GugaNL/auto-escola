import React from "react"
import { FaCar, FaKey, FaMapMarkerAlt, FaAccessibleIcon } from "react-icons/fa"
//import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import MainHeader from "../molecules/MainHeader"
import Heading from "../atoms/Heading"
import Button from "../atoms/Button"
import Grid from "../atoms/Grid"
import Feature from "../atoms/Feature"
import Section from "../molecules/Section"
import Footer from "../organisms/Footer"
import ProductGrid from "../organisms/ProductGrid"
import Accordion from "../atoms/Accordion"
import AccordionGroup from "../atoms/AccordionGroup"
//Hooks
import { useProducts } from "../../hooks/products"
//Images
import Road from "../../assets/road.mp4"
import Porsche from "../../assets/porsche.jpg"

const Home = () => {
  const products = useProducts()
  return (
    <>
      <MainHeader image={Porsche} listIconCheck>
        <Heading>
          {/*<h1>{text("Title", "Ganhe sua liberdade de ir e vir")}</h1>*/}
          <h1>
            Ganhe sua <strong>liberdade</strong> <br />
            para ir e vir
          </h1>
        </Heading>
        <ul>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>
            Animi cupiditate, architecto nobis neque repellat vitae aut saepe
            officia?
          </li>
          <li>
            Porro cumque in reiciendis, suscipit consequatur soluta quod amet
            eum incidunt quo.
          </li>
        </ul>
        <Button variant="outlined" color="primary">
          Matricule-se agora
        </Button>
      </MainHeader>

      <Section>
        <Grid sm={2} md={3} lg={4} xl={5}>
          <Feature icon={<FaCar />} title="Maior e melhor frota">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Feature>
          <Feature icon={<FaKey />} title="Habilitação mais rapida">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Feature>
          <Feature icon={<FaMapMarkerAlt />} title="Excelente atendimento">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Feature>
          <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Feature>
        </Grid>
      </Section>

      <Section inverse>
        <Heading>
          <h2>Conheça nossos serviços</h2>
        </Heading>
        <ProductGrid products={products} />
      </Section>

      <Section>
        <Grid md={2}>
          <div>
            <Heading>
              <h2>Lucena Auto Escola</h2>
            </Heading>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              quasi possimus eum consequuntur! Alias dolor cupiditate autem
              necessitatibus.
            </p>
            <div>
              <Button as={Link} to="/sobre" color="primary">
                Saiba mais
              </Button>
            </div>
          </div>
          <div>
            <video
              src={Road}
              width="100%"
              autoPlay
              playsInline
              loop
              muted
            ></video>
          </div>
        </Grid>
      </Section>

      <Section inverse>
        <Heading>
          <h2>Dúvidas recorrentes</h2>
        </Heading>
        <AccordionGroup>
          <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Accordion>

          <Accordion title="Como faço a mudança de categoria?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Accordion>

          <Accordion title="Fui multado, e agora?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </Accordion>
        </AccordionGroup>
      </Section>

      <Footer />
    </>
  )
}

//Home.defaultProps = {}

//Home.propTypes = {}

export default Home
