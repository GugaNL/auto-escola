import React from "react"
import ProductGrid from "../components/organisms/ProductGrid"

import Traffic from "./assets/traffic.jpg"

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
}

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, title: "Titulo 1", summary: "Texto 1", media: Traffic },
      { id: 2, title: "Titulo 2", summary: "Texto 2", media: Traffic },
      { id: 3, title: "Titulo 3", summary: "Texto 3", media: Traffic },
      { id: 4, title: "Titulo 4", summary: "Texto 4", media: Traffic },
      { id: 5, title: "Titulo 5", summary: "Texto 5", media: Traffic },
      { id: 6, title: "Titulo 6", summary: "Texto 6", media: Traffic },
    ]}
  ></ProductGrid>
)
