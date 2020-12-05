import React from "react"

import Heading from "./Heading"

import { render } from "@testing-library/react"

test("match snapshot", () => {
  const { asFragment } = render(<Heading>Title</Heading>)

  expect(asFragment()).toMatchSnapshot()
})
