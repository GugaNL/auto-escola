import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ThemeProvider from "../styles/ThemeProvider"
import AccordionGroup from "../components/atoms/AccordionGroup"
import Accordion from "../components/atoms/Accordion"

const title = "My title"

const renderGroup = (n) => {
  const accordions = []

  for (let i = 0; i < n; i++) {
    accordions.push(
      <Accordion key={i} title={`Title ${i}`}>
        Child {i}
      </Accordion>
    )
  }

  return render(
    <ThemeProvider>
      <AccordionGroup>{accordions}</AccordionGroup>
    </ThemeProvider>
  )
}

test("renders with one child", () => {
  render(
    <ThemeProvider>
      <AccordionGroup>
        <Accordion title={title} />
      </AccordionGroup>
    </ThemeProvider>
  )

  expect(screen.getByText(title)).toBeInTheDocument()
})

test("renders with three children", () => {
  render(
    <ThemeProvider>
      <AccordionGroup>
        <Accordion title={title} />
        <Accordion title={title} />
        <Accordion title={title} />
      </AccordionGroup>
    </ThemeProvider>
  )

  expect(screen.getAllByText(title)).toHaveLength(3)
})

test("renders with all accordions closed", () => {
  renderGroup(3)

  expect(screen.queryByText("child 0")).not.toBeInTheDocument()
  expect(screen.queryByText("child 1")).not.toBeInTheDocument()
  expect(screen.queryByText("child 2")).not.toBeInTheDocument()
})

test("opens accordion with click", async () => {
  renderGroup(5)

  await fireEvent.click(screen.getByText("Title 4"))

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument()
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument()
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument()
  expect(screen.queryByText("Child 3")).not.toBeInTheDocument()
  expect(screen.queryByText("Child 4")).toBeInTheDocument()
})

test("closes accordion with click", async () => {
  renderGroup(3)

  await fireEvent.click(screen.getByText("Title 1"))

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument()
  expect(screen.queryByText("Child 1")).toBeInTheDocument()
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument()

  await fireEvent.click(screen.getByText("Title 1"))

  expect(screen.queryByText("Child 0")).not.toBeInTheDocument()
  expect(screen.queryByText("Child 1")).not.toBeInTheDocument()
  expect(screen.queryByText("Child 2")).not.toBeInTheDocument()
})
