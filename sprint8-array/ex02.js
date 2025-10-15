function sumaArray(arr) {
  return arr.reduce((total, numar) => total + numar, 0);
}


console.log(sumaArray([1, -5, 20, -34, 16, 29, 36, -4]));  
console.log(sumaArray([3.45, -2.68, 356, -75.96, 64, 19.28]));  
