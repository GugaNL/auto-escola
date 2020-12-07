import React from "react"
import { FaCar, FaKey, FaMapMarkerAlt, FaAccessibleIcon } from "react-icons/fa"

import Feature from "../components/atoms/Feature"
import Grid from "../components/atoms/Grid"

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
}

export const usage = () => (
  <Feature icon={<FaCar />} title="Testando">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </Feature>
)

export const withList = () => (
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
)
