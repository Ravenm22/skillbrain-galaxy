function afiseazaCarti(carti) {
  for (let carte of carti) {
    console.log(`${carte.titlu} de ${carte.autor}`);

    if (carte.esteCitita) {
      console.log(`Ai citit deja "${carte.titlu}" de ${carte.autor}`);
    } else {
      console.log(`Trebuie să citești "${carte.titlu}" de ${carte.autor}`);
    }
  }
}

const carti = [
  { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
  { titlu: "Carte 2", autor: "Autor 2", esteCitita: false },
];

afiseazaCarti(carti);