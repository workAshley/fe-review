import { forEach } from './index'
import { runCallback } from '.'

describe('mock', () => {
  test('runcallback的参数callback是一个函数，他应该在runcallback函数里头被调用', () => {
    const callback = jest.fn()
    runCallback(callback)

    expect(callback).toBeCalled()
  })

  test('callback应该被调用三次', () => {
    const callback = jest.fn()
    forEach(['one', 'two', 'three'], callback)
    expect(callback.mock.calls.length).toBe(3)
    console.log('callback=>', callback.mock)
  })

  test('callback.mock.calls应该是：[["one",0],["two",1],[“three”,2]]', () => {
    const callback = jest.fn()
    forEach(['one', 'two', 'three'], callback)
    expect(callback.mock.calls[0]).toEqual(['one', 0])
    expect(callback.mock.calls[1]).toEqual(['two', 1])
    expect(callback.mock.calls[2]).toEqual(['three', 2])
  })
})
