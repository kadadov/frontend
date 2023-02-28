// import { describe, expect, test } from "@jest/globals"

import { sum } from "./sum"

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3)
  })
  test("adds 4 + 2 to equal 3", () => {
    expect(sum(4, 2)).toBe(6)
  })
  test("adds 4 + 2 to not equal 0", () => {
    expect(sum(4, 2)).not.toBe(0)
  })
})
