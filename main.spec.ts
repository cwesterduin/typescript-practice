import { myAdd } from './main'

describe("This is a simple test", () => {
  test('add 1 and 2', () => {
    expect(myAdd(1,2)).toEqual(3)
  })
})