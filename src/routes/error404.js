import React from "react"
//Components
import Error from "../components/pages/Error"
//Images
import ErrorPage from "../assets/svg/not-found.svg"

const error404 = () => (
  <Error
    title="Página não encontrada"
    description="Ops! Essa página não existe."
    image={ErrorPage}
  />
)

export default error404
