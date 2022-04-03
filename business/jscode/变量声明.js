c()
d()
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
