import React from "react"
import Card, {
  CardBody,
  CardMedia,
  CardMediaDesc,
} from "../components/molecules/Card"
import Heading from "../components/atoms/Heading"
import Button from "../components/atoms/Button"
import Section from "../components/molecules/Section"

import Traffic from "./assets/traffic.jpg"
import DogTeacher from "../assets/driverTeachers/marrom.jpg"

export default {
  title: "Components/Molecules/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDesc },
}

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título Qualquer</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quidem dolorum voluptatibus et voluptate dolor architecto voluptas!.
        </p>

        <div>
          <Button variant="link" color="primary">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
)

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={Traffic} />
      <CardBody>
        <Heading>
          <h6>Título Qualquer</h6>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quidem dolorum voluptatibus et voluptate dolor architecto voluptas!.
        </p>

        <div>
          <Button variant="link" color="primary">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
)

export const withOnlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={DogTeacher}>
        <CardMediaDesc>
          <h5>Bob</h5>
        </CardMediaDesc>
      </CardMedia>
    </Card>
  </Section>
)
