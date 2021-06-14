let num = [1,2,3];

console.log(num[Symbol.iterator]());

let itfn = num[Symbol.iterator]();

console.log (itfn.next());
console.log(itfn.next());
console.log(itfn.next());
