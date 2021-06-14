function* gen()
{
  yield 1;
  yield 2;
}

let obj = {
  [Symbol.iterator]: gen
}

for(let element of obj)
  {
    console.log(element);
  }
