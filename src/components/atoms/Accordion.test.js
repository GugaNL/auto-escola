import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ThemeProvider from "../../styles/ThemeProvider"
import Accordion from "./Accordion"

const childrenText = "My children text"
const titleText = "My title"

test("renders with title", () => {
  render(
    <ThemeProvider>
      <Accordion title={titleText}></Accordion>
    </ThemeProvider>
  )
  expect(screen.getByText(titleText)).toBeInTheDocument()
})

test("renders with children", () => {
  render(
    <ThemeProvider>
      <Accordion>{childrenText}</Accordion>
    </ThemeProvider>
  )
  expect(screen.queryByText(childrenText)).not.toBeInTheDocument()
})

test("triggers onChain when it is clicked", async () => {
  const handleChange = jest.fn()
  render(
    <ThemeProvider>
      <Accordion title={titleText} onChange={handleChange}></Accordion>
    </ThemeProvider>
  )
  await fireEvent.click(screen.getByText(titleText))
  expect(handleChange).toBeCalledTimes(1)
})

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(
        <ThemeProvider>
          <Accordion open>{childrenText}</Accordion>
        </ThemeProvider>
      )
      expect(screen.queryByText(childrenText)).toBeInTheDocument()
    })

    test("hide children on click", () => {
      const { rerender } = render(
        <ThemeProvider>
          <Accordion title={titleText} open>
            {childrenText}
          </Accordion>
        </ThemeProvider>
      )

      rerender(
        <ThemeProvider>
          <Accordion title={titleText} open={false}>
            {childrenText}
          </Accordion>
        </ThemeProvider>
      )

      expect(screen.queryByText(childrenText)).not.toBeInTheDocument()
    })
  })

  describe("when starts closed", () => {
    test("renders without children", () => {
      render(
        <ThemeProvider>
          <Accordion open={false}>{childrenText}</Accordion>
        </ThemeProvider>
      )
      expect(screen.queryByText(childrenText)).not.toBeInTheDocument()
    })
  })
})
