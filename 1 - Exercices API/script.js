const inputVille = document.querySelector("#ville").value;
const envoiBtn = document.querySelector("#btnEnvoi");
const affichageMeteo = document.querySelector("#meteo");

console.log(inputVille);
console.log(envoiBtn);
console.log(affichageMeteo);

envoiBtn.addEventListener("click", (e) => {
    e.preventDefault(e);

    async function afficherMeteo() {
        try {
            const response = await fetch(
                "https://geocoding-api.open-meteo.com/v1/search?name=VILLE"
            );
            const infoVille = await response.json();
            
            console.log(response);
            console.log(infoVille);
      } catch {}
}
});
