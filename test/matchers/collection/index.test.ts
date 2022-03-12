describe('', () => {
  test('toContain: shoppinglist应该有milk', () => {
    const shoppinglist = ['bags', 'paper', 'milk']
    expect(shoppinglist).toContain('milk')
  })
  test('toContain:shoppinglistSet应该有milk', () => {
    const shoppinglistSet = new Set(['paper', 'milk'])
    expect(shoppinglistSet).toContain('milk')
  })
})
