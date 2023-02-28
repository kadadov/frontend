import { render, screen } from "@testing-library/react"

import { Loader } from "./Loader"

test("Render Loader", () => {
  render(<Loader />)
  const linkElement = screen.getByText("text")
  expect(linkElement).toBeInTheDocument()
})
