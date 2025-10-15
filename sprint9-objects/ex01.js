function creeazaReteta(titlu, portii, ingrediente) {
  const reteta = {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente
  };

  console.log("Titlu:", reteta.titlu);
  console.log("Porții:", reteta.portii);
  console.log("Ingrediente:", reteta.ingrediente);

  return reteta;
}

creeazaReteta("Pizza", 3, ["sunca", "cas", "ketchup"]);
