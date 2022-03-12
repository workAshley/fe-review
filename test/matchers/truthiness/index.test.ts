describe('toBeNull', () => {
  test('toBeNull: obj应该等于null', () => {
    const obj = null
    expect(obj).toBeNull()
  })
  test('toBeUndefined: count应该等于undefined', () => {
    const count = undefined
    expect(count).toBeUndefined()
  })
  test('toBeDefined:count应该被定义了', () => {
    const count = 1
    expect(count).toBeDefined()
  })
  test('toBeTruthy: count/bool/str应该为真值', () => {
    const count = 1
    expect(count).toBeTruthy()
  })
  test('toBeFalsy:count/bool/str应该为假值', () => {
    const count = 0
    expect(count).toBeFalsy()
  })
})
