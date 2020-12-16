import React from "react"
import Error from "../components/pages/Error"

import ErrorPage from "../assets/svg/not-found.svg"

export default {
  title: "Components/Pages/Error",
  component: Error,
}

export const usage = () => (
  <Error
    title="Página não encontrada"
    description="Ops! Essa página não existe."
    image={ErrorPage}
  />
)
