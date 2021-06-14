function *select(){
  yield 1;
  yield 2;
}
let it = select();
console.log(it.next());
console.log(it.next());
