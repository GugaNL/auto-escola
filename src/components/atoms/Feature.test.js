import React from "react"
import { render } from "@testing-library/react"
import Feature from "./Feature"
import ThemeProvider from "../../styles/ThemeProvider"

test("renders the title", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Feature title="My title" />
    </ThemeProvider>
  )

  expect(getByText("My title")).toBeInTheDocument()
})

test("renders the children", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Feature>My children</Feature>
    </ThemeProvider>
  )

  expect(getByText("My children")).toBeInTheDocument()
})
