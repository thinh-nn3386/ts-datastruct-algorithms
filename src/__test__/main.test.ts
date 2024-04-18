// requireActual ensures you get the real file
// instead of an automock
// we use import type and <typeof ...> to still get types
import { testJest } from "../main"

describe("testJest", () => {
  test("testJest equal to 4", () => {
    expect(testJest()).toBe(4)
  })
})

// required with this small example
// to make the isolatedModules config happy
export { }