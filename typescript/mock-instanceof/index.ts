function _proto_(obj:any){
  return Reflect.getPrototypeOf(obj)
}

export default function mockInstanceof(obj:any, objConstructor:any) {
  // 目的 通过不断的拿obj的proto属性，判断objConstructor.prototype
  // 是不是最终在原型链上
  const target= objConstructor.prototype;
  const curPrarent = obj._proto_;
  while(true){
    if(cer){}
  }
}
