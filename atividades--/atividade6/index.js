class Estudante {
  //constructor faz com que as instancias possam ser passadas para outras classes
  constructor(nome, email, RA, curso, ...disciplinas) {
    //o this é usado para se referir ao objeto Estudante
    this.nome = nome;
    this.email = email;
    this.RA = RA;
    this.curso = curso;
    this.disciplinas = disciplinas;
    this.Primeira_disciplina = disciplinas[0];
    this.Ultima_disciplina = disciplinas[disciplinas.length - 1];
  }
}
const aluno1 = new Estudante(
  "Kairo",
  "kairoepc@hotmail.com",
  123456,
  "ads",
  "lpg1",
  "calc",
  "eng"
);
const aluno2 = new Estudante(
  "Juliscreusa",
  "juli@tacmail.com",
  123456,
  "ads",
  "calc",
  "prog",
  "sist"
);
console.log(aluno1);
console.log(aluno2);
