/*Scrieți o funcție numită tellFortune care:
primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
Afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).*/

function tellFortune(lucruri, locatieGeografica, Job) {
  return `Vei lucra ca ${Job} în ${locatieGeografica}, si iti vei putea permite ${lucruri} masini.`;
}

console.log(tellFortune(3, "Romania", "Programator", "Programator"));