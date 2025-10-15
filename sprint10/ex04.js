const addNumber = (...numere) => {
  let suma = 0;
  for (let numar of numere) {
    suma += numar;
  }
  return suma;
};

console.log(addNumber(1, 2, 3));        
console.log(addNumber(1, 2, 3, 4, 5));  
