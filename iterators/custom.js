let person = {
  name: 'abc',
  hobbies:['sports','cooking'],
  [Symbol.iterator]: function(){
    let hobbies=this.hobbies;
    let i =0;
    return{
      next: function(){
      let values = hobbies[i]
      return{
        done: i > hobbies.length? true:false,
        value:values
      }
        
      }
    }
  }
}

for(let hobby of person){
  console.log(hobby);
}
