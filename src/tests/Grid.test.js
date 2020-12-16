import React from "react"
import { render } from "@testing-library/react"
import ThemeProvider from "../styles/ThemeProvider"
import Grid from "../components/atoms/Grid"

test("match snapshot with no params", () => {
  const { asFragment } = render(
    <ThemeProvider>
      <Grid></Grid>
    </ThemeProvider>
  )

  expect(asFragment()).toMatchSnapshot()
})
