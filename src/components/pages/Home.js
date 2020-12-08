import React from "react"
import { FaCar, FaKey, FaMapMarkerAlt, FaAccessibleIcon } from "react-icons/fa"
//import PropTypes from "prop-types"
import Porsche from "../../assets/porsche.jpg"
import MainHeader from "../molecules/MainHeader"
import Heading from "../atoms/Heading"
import Button from "../atoms/Button"
import Grid from "../atoms/Grid"
import Feature from "../atoms/Feature"
import Section from "../molecules/Section"

const Home = () => (
  <>
    <MainHeader image={Porsche}>
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
          Porro cumque in reiciendis, suscipit consequatur soluta quod amet eum
          incidunt quo.
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
  </>
)

//Home.defaultProps = {}

//Home.propTypes = {}

export default Home
