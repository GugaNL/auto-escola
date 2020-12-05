import React from "react"
import MainHeader from "./MainHeader"

import { render } from "@testing-library/react"

test("Render the MainHeader with the childrens", () => {
  const { debug, getAllByText, getByText } = render(
    <MainHeader>
      <p>Gustavo Nunes</p>
    </MainHeader>
  )

  //debug()

  expect(getByText("Gustavo Nunes")).toBeInTheDocument()
})

test("Render the background image", () => {
  const image = "http://test/image.js"

  const { getByTestId } = render(<MainHeader image={image} />)

  expect(getByTestId("MainHeader")).toHaveStyleRule({
    backgroundImage: image,
  })
})
