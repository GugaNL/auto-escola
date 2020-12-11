import React from "react"
import BreadCrumb from "../components/atoms/BreadCrumb"

export default {
  title: "Components/Atoms/BreadCrumb",
  component: BreadCrumb,
}

const items = [
  { label: "Início", link: "/" },
  { label: "Sobre", link: "" },
]

export const usage = () => <BreadCrumb items={items} />
