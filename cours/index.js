// ** tableaux **

let array = ["paris", "bordeaux", "toulouse", "nantes"];
// console.log(array);

let array2 = ["Bordeaux", 33, true, [1, 2], { nom: 'Denis' }];
// console.log(array2[4].nom); 

// ** les objets **


let objet = {
    name: "denis",
    age: 26,
    techno: ["javascript", "html", "node.js"],
    admin: false,
};

// objet.adresse = "32 rue du code";
// console.log(objet);

let data = [
    {
        name: "denis",
        age: 26,
        techno: ["javascript", "html", "node.js"],
        admin: false,
    },
    {
        name: "nédim",
        age: 23,
        techno: ["javascript", "html", "node.js"],
        admin: false,
    },

    {
        name: "Paul",
        age: 24,
        techno: ["javascript", "html", "node.js"],
        admin: true,
    }
];

// console.log(data); 

// ** LES STRUCTURES DE CONTROLE **


if (data[0].age > data[1].age) {
    // console.log(data[0].name + " est plus agé que " + data[1].name);
} else {
    // valeur si faux
};

// valeur a teste ? si vrai: si faux; ( le ternaire ) 


// while 

let w = 0; 

while (w < 10) {
    w++
    // console.log("la valeur de w est de :  "+ w);
}; 

// do while 

let d = 0;

do {
    d++;
    // console.log(d);
} while (d < 5); 

// BOUCLE FOR 

// for (const user of data) {
//     document.body.innerHTML += `<li>${user.name} - ${user.age} ans</li>`;
// }; 


// on déclare la valeur de i | on va bouclé jusqu'au bout du tableau ou objet // on incremente i avec ++  si la condition n'est pas remplie
for (i = 0; i < data.length; i++) {
    // document.body.innerHTML += "<h2>" + data[i].name + "</h2>";
    // console.log(data[i].techno[0]);
};

// document.body.addEventListener('click', (e) => {
//     console.log(e.target.id);
//     // if (e.target.id === 'javascript') {
//     //     document.body.style.background = "yellow";
//     // }


// SWITCH VERIFIER UNE CONDITION
//     switch (e.target.id) {
//         case "javascript":
//             document.body.style.background = "yellow";
//             break; 
//         case "php":
//             document.body.style.background = "purple";
//             break; 
//         case "python":
//             document.body.style.background = "blue";
//             break; 
//         default:
//             null; 
//     }
// })


/// METHODE STRING 
let string = "javascript est un language orienté object"; 

// console.log(typeof("49"));
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string));
// console.log(string.length);
// console.log(string[string.length -1]);


// indexOF
// console.log(string.indexOf());

// slice 
// let newString = string.slice(5 , 17);
// console.log(newString);


// split
// console.log(string.split(" "));

// toLowerCase() // toUpperCase
// console.log(string.toLocaleLowerCase()); 
// console.log(string.toUpperCase());

// replace 
// console.log(string.replace("javascript", "Php"));
// console.log(string.replace("javascript","php"));


// ---------------------- 

// METHODE NUMBERS


// let number2 = 32.32423;
// let numberString = "42.12 est un chiffre"; 

// // console.log(number2.toFixed(1)); garde le nombre indiqué après la virgule.
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));


// methode Math()

// console.log(Math.PI);
// console.log(Math.round(4.5));"arrondie au plus pret inferieur ou supérieur."
// console.log(Math.floor(4.9));"arrondie au plus bas."
// console.log(Math.ceil(4.3)); "arrondie au plus haut."
// console.log(Math.floor(Math.random() * 50));" Methode a retenir !!"


// METHODE POUR LES TABLEAUX 

let array3 = ["javascript", "php", "css"];
let array4 = ["Ruby", "solidity" ,"React"];

// let newArray = array3.concat(array4)
// console.log(newArray)


// // spread operateur 
// let newArray = [...array3, ...array4]
// console.log(newArray);

// // Join 
// console.log(array3.join(''));

//slice 
// console.log(array3.slice(1)); 

// indeOf
// console.log(array3.indexOf("css")); " savoir la place d'un element dans un tableaux "


// forEach
// array3.forEach((languages) => console.log(languages)); " enumeré les élément d'un tableaux un par un"


// console.log(array3.every((language) => language === "php")); "sassuré qu'il sont tous egaux"
// console.log(array3.some((language) => language === "php")); " s'assuré qu'il y en a uné"


// SHIFT 
// let shift = array3.shift() " retire le premier element"
// console.log(array3); 

// POP 
// console.log(array3.pop()); "retire le dernier element" 


// SPLICE
// const restArray = array3.splice(1,1 , "C++"); " retiré des element et ajouté une valeur au tableau"
// console.log(array3);

// IMPORTANT POUR LA MANIPULATION DE TABLEAU


// REDUCE
 let arrayNumber = [12, 24, 39, 199]; " additioné ou utilisé les nombres dans un tableau"
// console.log(arrayNumber.reduce((x,y)=> x +y));

// PUSH 
// arrayNumber.push(23) "ajoute une valeur en dernier a un tableau"
// console.log(arrayNumber);


// FILTER (filtrer )  SORT( trier )  ET MAP ( Lister un nouveau tableau) 

console.log(arrayNumber.filter((number) => number >10));