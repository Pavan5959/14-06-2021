let num = [1,2,3];

num[Symbol.iterator] = function(){
  let nextValue = 10;
  return{
    next : function(){
      nextValue++;
      return{
        done: nextValue > 15? true : false,
        value: nextValue
      }
    }
  }
}
let itfn = num[Symbol.iterator]();
console.log(itfn.next());


for(let values of num){
  console.log(values);
}

