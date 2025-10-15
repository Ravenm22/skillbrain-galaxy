function numaraVocale(str) {
  const vocale = 'aeiouAEIOU';  // Setul de vocale
  let numarVocale = 0;  // Contorul pentru vocale

  // Parcurgem fiecare caracter din șirul str
  for (let i = 0; i < str.length; i++) {
    if (vocale.includes(str[i])) {
      numarVocale++;
    }
  }
  
  return numarVocale;
}


console.log(numaraVocale("string de test"));  
