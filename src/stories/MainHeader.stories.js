import React from "react"
import MainHeader from "../components/MainHeader"
import Heading from "../components/Heading"

//Assets
import Porsche from "./assets/porsche.jpg"
//import Traffic from "./assets/traffic.jpg"

//GlobalStyles
import GlobalStyle from "../styles/GlobalStyle"

//Story addons
import { text } from "@storybook/addon-knobs"

export default {
  title: "MainHeader",
  component: MainHeader,
}

export const usage = () => (
  <>
    <GlobalStyle />
    <MainHeader image={Porsche}>
      <Heading>
        <h1>{text("Title", "Ganhe sua liberdade de ir e vir")}</h1>
        {/*<h1>
          Ganhe sua <strong>liberdade</strong> <br />
          para ir e vir
        </h1>*/}
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
    </MainHeader>
  </>
)
