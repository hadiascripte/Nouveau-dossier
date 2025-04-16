const userName = document.querySelector("#userName").value;
const btn = document.querySelector("#btn");
// const baseDeDonne = ["Hadia", "Raouf", "Nancy", "Niama"];
const verification = document.querySelector("#statut");

console.log(userName);
console.log(btn);
// console.log(baseDeDonne);
console.log(verification);

function verifierUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userName = document.querySelector("#userName").value;
            console.log(userName);
            let baseDeDonne = ["Hadia", "Raouf", "Nancy", "Niama"];

            console.log(baseDeDonne);

            if (baseDeDonne.includes(userName.trim())) {
                reject(new Error(`Le nom d'utilisateur ${userName} est déjà pris`));
            } else {
                resolve(`Le nom d'utilisateur ${userName} est disponible`);
            }
        }, 3000);
    });
}
document.querySelector("#btn").addEventListener("click", async () => {
    const userName = document.querySelector("#userName").value;
    const verification = document.querySelector("#statut");

    //     let baseDeDonne = ["Hadia", "Raouf", "Nancy", "Niama"];
    console.log(userName);

    if (!userName) {
        verification.innerHTML = "Veuillez choisir un autre nom";
        verification.style.color = "red";
        return;
    }
    verification.innerHTML = "Vérification en cours";
    verification.style.color = "green";

    try {
        const message = await verifierUser(userName);
        verification.innerHTML = message;
        verification.style.color = "green";
    } catch (erreur) {
        verification.innerHTML = erreur.message;
        verification.style.color = "red";
    }
});
