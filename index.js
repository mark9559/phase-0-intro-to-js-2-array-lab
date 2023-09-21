// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) 
// {
//   cats.push(name);
// }

// function destructivelyPrependCat(name)
// {
//   cats.unshift(name);
// }

// function destructivelyRemoveLastCat(name)
// {
//   cats.pop(name);
// }

function appendCat(name) 
{
  return cats.concat(name);
}

function prependCat(name) 
{
  return [name].concat(cats);
}

function removeLastCat(name) 
{
  return cats.slice(0, -1);
}

// function destructivelyRemoveFirstCat()
// {
//   cats.shift(0);
// }

function removeFirstCat(name) 
{
  return cats.slice(1);
}

function destructivelyAppendCat(name) {
    return cats.push(name);
  }
  
  function destructivelyPrependCat(name) {
   return cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    return cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    return cats.shift();
  }

  