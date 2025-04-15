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

// let input = document.querySelector("#prenom");
// const envoie = document.querySelector("#btnEnvoi");
// const connexion = document.querySelector("#btnConnexion");
// const deconnexion = document.querySelector("#btnDeconnexion");

// const divConnexion = document.querySelector("#divConnexion");
// const divbtn = document.querySelectorAll("#divConnexion input");

// console.log(input, envoie);
// divConnexion.style.display = "none";

// envoie.addEventListener("click", (userValue) => {
//     const affichage = document.querySelector("#affichage");
//     userValue = input.value;
//     document.cookie = `nom=${userValue}; max-age=36000; path=/`;
//     let affichageValue = document.cookie.split(";")[0];
//     let prenom = affichageValue.split("=")[1];

//     divConnexion.style.display = "block";
//     affichage.innerHTML = `Bonjour <strong>${prenom} </strong> vous pouvez vous connecter !`;

//     console.log(userValue);
//     console.log(affichageValue);
//     console.log(prenom);
// });

let input = document.querySelector("#prenom");
const envoie = document.querySelector("#btnEnvoi");

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

// Si déjà connecté et thème existant, appliquer le thème
console.log("keyData", cookieData[sessionName]);
// SI (J'ai une session  ET QUE le nom dans la session correspond à une key de cookieData){
if (sessionName && cookieData[sessionName]) {
    console.log(cookieData[sessionName]);

    //on ajoute le thème au body
    document.body.classList = cookieData[sessionName];
}

// Formulaire de connexion

document.querySelector("#btnConnexion").addEventListener("submit", (e) => {
    e.preventDefault();
    const prenom = document.querySelector("#btnConnexion").value;
    // Vérifier si le cookie existe pour ce nom

    if (cookieData[prenom]) {
        console.log("cookieData[name] : ", cookieData[prenom]);

        sessionStorage.setItem("name", prenom);
        document.body.classList = cookieData[prenom]; // applique le thème
        alert("Connexion reussie :), thème chargé !");
    } else {
        alert("Nom inconnu :( Veuillez vous enregistrer");
    }
});

// Formulaire d'enregistrement
document.querySelector("#btnConnexion").addEventListener("submit", (e) => {
    e.preventDefault();
    const prenom = document.querySelector("#btnConnexion").value;
    //la checkbox
    const darkmode = document.querySelector("#register-darkmode").checked;
    const theme = darkmode ? "dark" : "light";
    // Créer cookie personnalisé : clé = nom, valeur = thème
    let expiration = 3 * 24 * 3600;
    document.cookie = `${prenom}=${theme}; max-age=${expiration}; path=/`;
    // Stocker dans session
    sessionStorage.setItem("name", prenom);
    // Appliquer thème
    document.body.classList.add(theme);
    alert("enregistrement réussi +!!");
});

// // Bouton de connexion

// const btnConnexion = document.querySelector("#btnConnexion");
// console.log(btnConnexion);

// btnConnexion.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let inputPrenom = domucment.querySelector("#prenom").value;

//     if (cookieData[inputPrenom]) {
//         sessionStorage.setItem("name", inputPrenom);
//         console.log(inputPrenom);
//         document.body.classList = cookieData[inputPrenom];
//     }
// });
