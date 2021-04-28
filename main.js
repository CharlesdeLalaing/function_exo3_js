// EXO
// Créer un tableau [codingSchoolX] vide.
// Créer une fonction qui permet d'ajouter quelqu'un au tableau
// Créer une fonction qui permet de retirer quelqu'un au tableau
// Avec les instructions ci-dessous reproduisez les entrées / sorties de la classe

let codingSchoolX = ["Yassin", "Farhad"];
let eleve;

function codingSchoolPlus () {
    return codingSchoolX.push(eleve);
}

function codingSchoolMoins() {
    return codingSchoolX.splice(eleve,1);
}

//  2. Maintenant que vous ne vous etes pas fait avoir sur l'orthographe du nom du tableau il est 8h43 Cactus 
//   arrive en classe
alert("il est 8h43 Cactus arrive en classe");
eleve = "Cactus";
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  3. 8h44 Mihai rentre, allume son PC et commence a mettre a jour ses notes
alert("il est 8h44 et Mihai rentre, allume sont pc et commence à mettre a jours ses notes");
eleve = "Mihai";
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  4. 8h45 Ilyas et Mohammed rejoignent la classe
alert("il est 8h45, Ilys et Mohammed rejoignent la classe");
eleve = ("Mohammed");
codingSchoolPlus(eleve)
eleve = ("Ilyas");
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  5. 8h51 Yassin et Farhad voyent Nicolas passer devant la porte, et decident de le rejoindre
alert("8h51 Yassin et Farhad voyent Nicolas passer devant la porte, et decident de le rejoindre");
eleve = codingSchoolX.indexOf("Yassin");
codingSchoolMoins(eleve);
eleve = codingSchoolX.indexOf("Farhad");
codingSchoolMoins(eleve);

console.log(codingSchoolX)

//  6. 8h55 Tania et Oussama rentrent en classe en faisant un maximum de bruit
alert("8h55 Tania et Oussama rentrent en classe en faisant un maximum de bruit");
eleve = ("Tania");
codingSchoolPlus(eleve)
eleve = ("Oussama");
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  7. 8h56 Alexis rentre en classe puis redescend prendre sa tasse de café
alert("8h56 Alexis rentre en classe puis redescent prendre sa tasse de café");
eleve = ("Alexis");
codingSchoolPlus(eleve)

console.log(codingSchoolX)

eleve = codingSchoolX.indexOf("Alexis");
codingSchoolMoins(eleve)

console.log(codingSchoolX)

//  8. 8h59 Issam et Anthony rentre en classe saluant tout le monde
alert("8h59 Issam et Anthony rentrent en classe saluant tout le monde");
eleve = ("Issam");
codingSchoolPlus(eleve)
eleve = ("Anthony");
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  9. 9h00 Andy rentre tranquille et observe tout le monde
alert("9h00 Andy rentre tranquille et observe tout le monde");
eleve = ("Andy");
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  10. 9h03 Loic et Kevin rentrent et observent Mohammed qui a l'air d'etre tranquilleeee
alert("9h03 Loic et Kevin rentrent et observent Mohammed qui a l'air d'etre tranquilleeeee");
eleve = ("Loic");
codingSchoolPlus(eleve)
eleve = ("Kevin");
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  11. 9h04 Junior rentre en classe avec sa tasse de café
alert("9h04 Junior rentre en classe avec sa tasse de café");
eleve = ("Junior");
codingSchoolPlus(eleve)

console.log(codingSchoolX)

//  12. 9h05 Charles et William rentrent en classe tous contents de n'etre que 5 minutes en retard, Cactus leur dit 
//   qu'ils sont en retard et puis it sort
alert("9h05 Charles et William rentrent en classe tous contents de n'être que 5 minutes en retard, Cactus leur dit qu'ils sont en retard et puis il sort");

eleve = "Charles";
codingSchoolPlus(eleve);
eleve = "William";
codingSchoolPlus(eleve);
eleve = codingSchoolX.indexOf("Charles");
codingSchoolMoins(eleve);
eleve = codingSchoolX.indexOf("William");
codingSchoolMoins(eleve);

console.log(codingSchoolX)

//  13. 9h10 Gauthier rentre avec sa petite tasse de café et son pc, tout content et souriant
alert("9h10 Gauthier rentre avec sa petite tasse de café et son pc, tout content et souriant");
eleve = "Gauthier";
codingSchoolPlus(eleve);

console.log(codingSchoolX);

//  14. 9h20 Les coachs commencent a donner cours
alert("9h20 les coachs commencent a donner cours");
eleve = "Cactus",
codingSchoolPlus(eleve);

console.log(codingSchoolX);

//  15. 9h30 Beytullah rentre en faisant le minimum de bruit possible mais toute la classe la regarde par total incompréhension
alert("9h30 Beytullah rente en faisant un minimum de bruit possible mais toute la classe le regarde par total incomprehension");
eleve= "Beytullah";
codingSchoolPlus(eleve);

console.log(codingSchoolX);

