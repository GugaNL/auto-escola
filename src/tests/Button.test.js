import React from "react"
import Button from "../components/atoms/Button"
import { render, fireEvent } from "@testing-library/react"
import ThemeProvider from "../styles/ThemeProvider"

test("renders a text in button", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Button>Click here</Button>
    </ThemeProvider>
  )

  expect(getByText("Click here")).toBeInTheDocument()
})

test("trigger event on click", () => {
  const handleClick = jest.fn() //Função para mock de evento

  const { getByRole } = render(
    <ThemeProvider>
      <Button onClick={handleClick}></Button>
    </ThemeProvider>
  )

  fireEvent.click(getByRole("button"))

  expect(handleClick).toBeCalled()
})

test.each([["default"], ["primary"], ["danger"]])(
  "renders with %s color",
  (color) => {
    const { asFragment } = render(
      <ThemeProvider>
        <Button color={color} />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  }
)

test.each([["default"], ["outlined"], ["link"]])(
  "renders with %s variant",
  (variant) => {
    const { asFragment } = render(
      <ThemeProvider>
        <Button variant={variant} />
      </ThemeProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  }
)

test("renders with variant outlined and primary color", () => {
  const { asFragment } = render(
    <ThemeProvider>
      <Button variant="outlined" color="primary" />
    </ThemeProvider>
  )

  expect(asFragment()).toMatchSnapshot()
})

test("renders with variant link and primary color", () => {
  const { asFragment } = render(
    <ThemeProvider>
      <Button variant="link" color="primary" />
    </ThemeProvider>
  )

  expect(asFragment()).toMatchSnapshot()
})
