import React from "react"
import MainHeader from "./MainHeader"
import ThemeProvider from "../../styles/ThemeProvider"

import { render } from "@testing-library/react"

test("Render the MainHeader with the childrens", () => {
  const { debug, getAllByText, getByText } = render(
    <ThemeProvider>
      <MainHeader>
        <p>Gustavo Nunes</p>
      </MainHeader>
    </ThemeProvider>
  )

  //debug()

  expect(getByText("Gustavo Nunes")).toBeInTheDocument()
})

test("Render the background image", () => {
  const image = "http://test/image.js"

  const { getByTestId } = render(
    <ThemeProvider>
      <MainHeader image={image} />
    </ThemeProvider>
  )

  expect(getByTestId("MainHeader")).toHaveStyleRule({
    backgroundImage: image,
  })
})
