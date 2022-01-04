console.log("-- Les variables --");

var a = 10; // scope global
let b = 10; // scope classique (prog)
const c = 10; //constante

if(b < 20){
    var a;
    a = 20;
    let b;
    b = 20;
}

console.log(a);
console.log(b);

console.log("-- Les chaines de caractères --");
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String
let str = "bonjour";
console.log(str.length); // .length pour récuperer la longueur
console.log(str[1]); // récupère le deuxieme caractère de la chaine
console.log(str.toUpperCase()); // tout en maj
console.log(str.indexOf("ou")); // retourne l'indice de la 1ere occurrence dans la chaine sinon -1

console.log("-- Les tableaux --");
const arr = []; // const bloque l'affectation sur arr mais on peut quand meme le remplir via les méthodes
arr.push(10);
arr.push("Hello");
arr.push([2, "Hello2"]);
console.log(arr);

const students = ["Alexandre","Paul","Ayman", "Antoine", "Oriana", "Chloé"];
const students_A = students.filter(student => student.charAt(0) === "A" || student.charAt(0) === "a"); // ARROW_FUNCTION
/*for(let i=0; i<students.length; i++){
    if(students[i].charAt(0) == "A") students_A.push(students[i]);
}*/
const AStudents = students.filter(function(student){
    return student[0] === "A";
});
console.log(students_A,AStudents);

console.log("-- == / === --");
// == ou != comparaison de variable sans vérification des types
// === ou !== comparaison de variable avec vérification des types
console.log(1 == true); // true
console.log(1 === true); // false car 1 est de type "number" et true est "boolean"

console.log("-- Les fonctions --");

function superTest(tab){
    //Créer un tableau contenant à la place du prénom la longueur
    const res = tab.map(student => student.length);
    return res;
}
console.log(superTest(students));

console.log("-- Les objets --");

const obj = {}; //Création d'un objet vide
console.log(obj);
obj.test = ["a", "b"];
obj.alex = 0;
console.log(obj);
obj.alex = 2;
console.log(obj);
obj["alex"] = 3;
console.log(obj);

const allKeys = Object.keys(obj); // récupère toutes les clefs d'un objet
console.log(allKeys);
for(let key of allKeys) {
    console.log(key + ": " + obj[key]); // permet de récuperer les valeurs à l'index
}

console.log(Object.entries(obj));