import React from "react"
import Callout, {
  CalloutBody,
  CalloutButton,
  CalloutMedia,
} from "../components/atoms/Callout"
import Button from "../components/atoms/Button"
//Images
import Direction from "../assets/svg/direction.svg"

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
}

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        distinctio, ratione suscipit voluptas vero non perferendis! Illo beatae
        distinctio voluptatibus facilis hic rerum commodi, quod fugiat eum nulla
        eligendi nesciunt!
      </p>
      <CalloutButton>
        <Button color="primary">Matricular</Button>
      </CalloutButton>
    </CalloutBody>
    <CalloutMedia image={Direction} />
  </Callout>
)
