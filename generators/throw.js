function* gen(end)
{
   for(let i=0; i<end; i++){
     yield i;
   } 
}

let it = gen(3);

console.log(it.next());
console.log(it.throw('error occured'));
console.log(it.next());
console.log(it.next());
