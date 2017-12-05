function passphrase(string){
  let count = 0;
  let array = string.split('\n').map(item => {
    return item.split(' ');
  })
  for(let i = 0 ; i < array.length ; i++){
      let a = new Set(array[i]);
      if(a.size === array[i].length) {
        count ++;
      }
  }
  return count;
}

let a = prompt('');
passphrase(a);
