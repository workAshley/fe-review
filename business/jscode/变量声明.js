c()
// d()
function c() {
  let a = 1
  console.log(a)
}
//  1因为发生了函数提升
var d = () => {
  let b = 2
  console.log(b)
}
// d is not a function
// 箭头函数不能发生函数提升
console.log(e) // undefined
var e = 4
console.log(e) // 4
// console.log(f);   // f is not defined
// console.log(g)     // g is not defined
function foo() {
  let f = 5
  var g = 6
}
// console.log(f);  // f is not defined
console.log(g)  // g is not defined

