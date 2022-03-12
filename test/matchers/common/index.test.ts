describe('common matchers', () => {
  test('toBe:我觉得..是...在你能完全确定某个数据类型的值的时候使用，常用在基础类型值上', () => {
    const count = 1
    expect(count).toBe(1)
  })
  test('toEqual: 我觉得。。长成，，。在你期望的对象长成某个样子的时候，常用引用类型值上', () => {
    const obj = {
      name: 'obj'
    }
    expect(obj).toEqual({
      name: 'obj'
    })
  })
})
