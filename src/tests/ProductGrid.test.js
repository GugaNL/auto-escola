import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import ProductGrid from "../components/organisms/ProductGrid"
import { MemoryRouter as Router } from "react-router-dom"

const buildProducts = (size) => {
  let result = []

  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Title ${i}` })
  }

  return result
}

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])("Meu grupo", (size, expected) => {
  test("with %i products show only %i", () => {
    const { getAllByRole } = render(
      <Router>
        <ProductGrid products={buildProducts(size)} />
      </Router>
    )

    expect(getAllByRole("heading").length).toBe(expected) //Quantas vezes o elemento h6 vai se repetir
  })

  test("Show the products when button is clicked", async () => {
    render(
      <Router>
        <ProductGrid products={buildProducts(size)} />
      </Router>
    )

    await fireEvent.click(screen.getByText("Lista completa de serviços")) //Não pode ser button porque existe mais de um

    expect(screen.getAllByRole("heading").length).toBe(size)
  })
})
