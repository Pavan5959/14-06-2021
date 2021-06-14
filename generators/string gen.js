function* gen()
{
  yield 'sports';
  yield 'cooking';
}

let obj = {
  [Symbol.iterator]: gen
}

for(let element of obj)
  {
    console.log(element);
  }
