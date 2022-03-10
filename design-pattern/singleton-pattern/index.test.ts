import Singleton from './index'

describe('test singleton pattern', () => {
  test('singleton', () => {
    const instance1 = new Singleton('jaylen1')
    const instance2 = new Singleton('jaylen2')
    const instance3 = new Singleton('jaylen3')
    expect(instance1).toBe(instance2)
    expect(instance2).toBe(instance3)
    expect(instance3).toBe(instance1)
  })
})
