import React from "react"

import Heading from "./Heading"

import ThemeProvider from "../styles/ThemeProvider"

import { render } from "@testing-library/react"

test("match snapshot", () => {
  const { asFragment } = render(
    <ThemeProvider>
      <Heading>Title</Heading>
    </ThemeProvider>
  )

  expect(asFragment()).toMatchSnapshot()
})
