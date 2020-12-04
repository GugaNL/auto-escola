import React from "react"
import ImageHeader from "../components/ImageHeader"

//Assets
import Porsche from "./assets/porsche.jpg"
import Traffic from "./assets/traffic.jpg"

//GlobalStyles
import GlobalStyle from "../components/GlobalStyle"

//PropTypes
import PropTypes from "prop-types"

export default {
  title: "ImageHeader",
  component: ImageHeader,
}

export const usage = () => (
  <>
    <GlobalStyle />
    <ImageHeader
      title={
        <span>
          Ganhe sua <strong>liberdade</strong> <br />
          para ir e vir
        </span>
      }
      image={Porsche}
    >
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
      <button>Matricule-se agora!</button>
    </ImageHeader>
  </>
)
