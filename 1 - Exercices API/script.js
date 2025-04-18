const envoiBtn = document.querySelector("#btnEnvoi");
const affichageMeteo = document.querySelector("#meteo");
const affichageMeteo2 = document.querySelector("#meteo2");

console.log(envoiBtn);
console.log(affichageMeteo);

envoiBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    affichageMeteo.innerHTML = "";
    affichageMeteo2.innerHTML = "";
    affichageMeteo.classList.remove("styleDivMeteo", "styledivError");
    affichageMeteo2.classList.remove("styleDivMeteo", "styleDiv");
    //Ajouter ici le spinner pour le chargement

    // Récupérer la valeur de l'input
    const inputVille = document.querySelector("#ville").value;
    console.log(inputVille);

    // Appeler l'API avec la ville saisie

    async function infosVille() {
        try {
            // Fecth pour récupérer les informations de la ville
            const reponse = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${inputVille}`
            );
            const infosVille = await reponse.json();
            console.log(infosVille);
            console.log(reponse);

            // Récupérer les données de la réponse
            const departement = infosVille.results[0].admin1;
            const latitude = infosVille.results[0].latitude;
            const longitude = infosVille.results[0].longitude;
            const codePostal = infosVille.results[0].postcodes[0];

            //Affichaege des données de la météo
            affichageMeteo2.classList.add("styleDivMeteo");
            affichageMeteo2.innerHTML = `<h4> Voici les informations météo:</h4>
              `;
            // Variables pour les infos de la ville

            const heure = infosVille.results[0].timezone;
            const population = infosVille.results[0].population;
            console.log(infosVille.results);

            // Fecth pour récupérer les informations météo
            const reponse2 = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            );

            const infoMeteo = await reponse2.json();
            console.log(infoMeteo);

            //Affichage des données des infos de la ville
            affichageMeteo.classList.add("styleDiv");
            affichageMeteo2.classList.add("styleDiv");
            affichageMeteo.innerHTML = `<h4> Voici les informations de la ville:</h4>
                <p>Ville : <strong>${inputVille}</strong> </p>
                <p>Département : ${departement} </p>
                <p>Code postal: ${codePostal} </p>
                <p>Latitude : ${latitude} </p>
                <p>Longitude : ${longitude} </p>
                <p>Population : ${population} </p>
                <p>🕑 Heure :${heure} </p>`;
            affichageMeteo2.innerHTML = `<h4> 🌞 Voici les informations météo:</h4>
                <p>🌡️Température : ${infoMeteo.current_weather.temperature}°C </p>
                <p> Vitesse du vent : ${infoMeteo.current_weather.windspeed} km/h </p>
                <p>🚩Direction du vent : ${infoMeteo.current_weather.winddirection}°</p>
                <p>🔄 Heure de la mise à jour : ${infoMeteo.current_weather.time}</p>`;
        } catch (error) {
            affichageMeteo.classList.add("styledivError");
            affichageMeteo.innerHTML = "Erreur lors de la récupération des données.";
            console.log("Error :", error);
        }
    }
    infosVille();
});
