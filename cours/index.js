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

document.body.addEventListener('click', (e) => {
    console.log(e.target.id);
    // if (e.target.id === 'javascript') {
    //     document.body.style.background = "yellow";
    // }

    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break; 
        case "php":
            document.body.style.background = "purple";
            break; 
        case "python":
            document.body.style.background = "blue";
            break; 
        default:
            null; 
    }
})

