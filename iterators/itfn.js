let num = [1,2,3];

num[Symbol.iterator] = function(){
  return{
    next : function(){
      return{
        done: false,
        value:10
      }
    }
  }
}
let itfn = num[Symbol.iterator]();
console.log(itfn.next());

