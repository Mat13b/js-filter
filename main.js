const personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 17 },
    { nom: "Charlie", age: 30 },
    { nom: "David", age: 20 },
    { nom: "Dave", age: 18 },
];



const result = personnes.filter((element) => element.age>=18);

console.log(result);






// Pass a function to map
const mpersonne = result.map((x) => x.nom );

console.log(mpersonne);