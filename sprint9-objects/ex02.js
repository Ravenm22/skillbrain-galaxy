function eliminaProprietate(obiect, proprietate) {
  const { [proprietate]: _, ...rezultat } = obiect; 
  return rezultat;
}

console.log(eliminaProprietate({ a: 1, b: 2 }, "b")); // { a: 1 }
