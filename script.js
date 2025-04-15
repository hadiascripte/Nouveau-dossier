// const login = document.querySelector("#login");
// const logout = document.querySelector("#logout");

// login.addEventListener("click", () => {
//     sessionStorage.setItem("connecte", "");
//     alert("Vous êtes connecté");
// });
// logout.addEventListener("click", () => {
//     sessionStorage.removeItem("connecte");
//     alert("Vous êtes déconnecté.");
// });


let input = document.querySelector("#prenom");
const envoie = document.querySelector("#btnEnvoi");
// const connexion = document.querySelector("#btnConnexion");
// const deconnexion = document.querySelector("#btnDeconnexion");

const divConnexion = document.querySelector("#divConnexion");
const divbtn = document.querySelectorAll("#divConnexion input");

console.log(input, envoie);
divConnexion.style.display = "none";

envoie.addEventListener("click", (userValue) => {
    const affichage = document.querySelector("#affichage");
    userValue = input.value;
    document.cookie = `nom=${userValue}; max-age=36000; path=/`;
    let affichageValue = document.cookie.split(";")[0];
    let prenom = affichageValue.split("=")[1];

    divConnexion.style.display = "block";
    affichage.innerHTML = `Bonjour <strong>${prenom} </strong> vous pouvez vous connecter !`;

    console.log(userValue);
    console.log(affichageValue);
    console.log(prenom);
});




//Bouton de connexion

// const btnConnexion = document.querySelector("#btnConnexion");console.log(btnConnexion);


// btnConnexion.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const inputPrenom = domucment.querySelector("#prenom").value;
// console.log(inputPrenom);

//     if (cookieData[inputPrenom]) {
//         sessionStorage.setItem("name", inputPrenom);
//         document.body.classList = cookieData[inputPrenom];
//     }
// });

// Bouton déconnexion












/*
document.cookie = "raouf=light;max-age=36000;path=/";
document.cookie = "tom=dark;max-age=36000;path=/";
document.cookie = "nancy=light;max-age=36000;path=/";
document.cookie = "najet=dark;max-age=36000;path=/";

// Récupérer tous nos cookies sous forme d'objet simple

const cookies = document.cookie.split(";");
const cookieData = {};
console.log(cookies);
console.log(cookieData);
// On parcours le tableau avec une boucle pour passer sur chaque index
for (let i = 0; i < cookies.length; i++) {
    // De nouveau avec [i] on demande de passer sur les "sous" index et de spliter les =
    const separes = cookies[i].split("=");
    // On veut récupérer la CLE et la Valeur des cookies(retirer les espaces avant et après avec trim())
    const key = separes[0].trim();
    const value = separes[1].trim();
    cookieData[key] = value;

    console.log(separes);
    console.log(value);
    console.log(key);
}
sessionStorage.setItem("name", "nancy");
const sessionName = sessionStorage.getItem("name");
if (sessionName && cookieData[sessionName]) {
    console.log(cookieData[sessionName]);
    document.body.classList = cookieData[sessionName];
}

*/

