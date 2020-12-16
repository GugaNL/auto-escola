import { BreakAt, BreakpointSize } from "../styles/Breakpoints"

test.each([
  [BreakpointSize.sm],
  [BreakpointSize.md],
  [BreakpointSize.lg],
  [BreakpointSize.xl],
])("break at i%", (size) => {
  expect(BreakAt(size)).toEqual(`@media (min-width: ${size}px)`)
})
