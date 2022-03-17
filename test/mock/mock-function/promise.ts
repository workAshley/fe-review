type IStatus = 'PENDING' | 'FULFILLED' | 'REJECTED'
class MyPromise {
  private static PENDING: IStatus = 'PENDING'
  private static FULFILLED: IStatus = 'FULFILLED'
  private static REJECTED: IStatus = 'REJECTED'
  private value: any
  private status: IStatus = 'PENDING'
  private reason: any
  private arr1: any[] = []
  private arr2: any[] = []
  constructor(executor: (...args: any[]) => any) {
    const resolve = (str: string) => {
      if (this.status !== MyPromise.PENDING) return
      this.value = str
      this.status = MyPromise.FULFILLED
      this.arr1.forEach((fn) => {
        fn(this.reason)
      })
      this.arr2.forEach((fn) => {
        fn(this.value)
      })
    }

    const reject = (reason: any) => {
      if (this.status !== MyPromise.PENDING) return
      this.status = MyPromise.REJECTED
      this.reason = reason
    }
    executor(resolve, reject)
  }
  then(success: any, fail: any) {
    if (this.status == MyPromise.REJECTED) {
      fail(this.reason)
    }
    if (this.status == MyPromise.FULFILLED) {
      success(this.value)
    }
    if (this.status == MyPromise.PENDING) {
      this.arr1.push(fail)
      this.arr2.push(success)
    }
  }
}

const p = new MyPromise((resolve) => {
  // resolve('shfisje')g
  setTimeout(() => {
    resolve('shfisje')
  }, 1000)
}).then(
  (value: any) => {
    console.log(value, 'value')
  },
  (reason: any) => {
    console.log(reason, 'reason')
  }
)
