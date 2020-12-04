import React from "react"
import ImageHeader from "../components/ImageHeader"
//import "../components/ImageHeader.css"

export default {
  title: "ImageHeader",
  component: ImageHeader,
}

export const usage = () => (
  <ImageHeader title="Ganhe sua liberdade">
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
)
