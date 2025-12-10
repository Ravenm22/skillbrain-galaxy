class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }

  get proprietati() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
}

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj); 
  }

  participaLaCampionat(pozitiaInCampionat) {
    if (typeof pozitiaInCampionat === "number" && pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat niciun premiu");
    }
  }
}

function main() {
  const masina1 = new MasinaDeCurse("Ferrari", "F8", "Rosu", "15 000");
  const masina2 = new MasinaDeCurse("Lamborghini", "Huracan", "Galben", "8 000");

  masina1.participaLaCampionat(2);

  masina2.participaLaCampionat(0);

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
}

main();
