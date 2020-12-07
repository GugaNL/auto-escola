import React from "react"

//Component
import Heading from "./../components/atoms/Heading"

//Story addons
import { text } from "@storybook/addon-knobs"

export default {
  title: "Components/Atoms/Heading",
  component: Heading,
}

export const usage = () => (
  <>
    <Heading>
      <h1>{text("title", "Título")} 1</h1>
    </Heading>
    <Heading>
      <h2>{text("title", "Título")} 2</h2>
    </Heading>
    <Heading>
      <h3>{text("title", "Título")} 3</h3>
    </Heading>
    <Heading>
      <h4>{text("title", "Título")} 4</h4>
    </Heading>
    <Heading>
      <h5>{text("title", "Título")} 5</h5>
    </Heading>
    <Heading>
      <h6>{text("title", "Título")} 6</h6>
    </Heading>
  </>
)
