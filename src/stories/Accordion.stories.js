import React from "react"
import Accordion from "../components/atoms/Accordion"
import AccordionGroup from "../components/atoms/AccordionGroup"

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
}

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </Accordion>

    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </Accordion>

    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit
    </Accordion>
  </>
)

export const withGroup = () => (
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
)
