document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        prenom: document.querySelector("#prenom").value,
        message: document.querySelector("#message").value,
    };

    console.log(prenom);
    console.log(message);

    fetch("https://wladimirperfiloff.alwaysdata.net/api/contact_simple.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/jason",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((result) => {
            document.querySelector("#resultat").textContent = result.message;
        })
        .catch((error) => {
            document.querySelector("#resultat").textContent =
                "Erreur lors de l'envoi.";
            console.log("Error :", error);
        });

    console.log(data);
});

// GET pour récupérer les messages

const btnRecup = document.querySelector("#chargerMessage");
const divMessages = document.querySelector("#messages");
console.log(btnRecup);
console.log(divMessages);

btnRecup.addEventListener("click", (e) => {
    e.preventDefault();

    async function chargerLesMessages() {
        try {
            const reponse = await fetch(
                "https://wladimirperfiloff.alwaysdata.net/api/messages.php"
            );

            const messages = await reponse.json();
            console.log(messages);

            divMessages.innerHTML = "";
            console.log(messages);

            messages.forEach((message) => {
                const divMessage = document.createElement("div");
                divMessage.classList.add("styleMessage");
                divMessage.innerHTML = `<h4> ${message.prenom} </h4>
            <p>" ${message.message} "</p>

            <p>Posté le ${message.date}</p>`;

                divMessages.appendChild(divMessage);
                console.log(divMessage);
            });
        } catch (error) {
            console.log("Erreur lors du chargement des messagess");
            alert("Un problème est survenu lors du chargement des messages");
        }
    }
    chargerLesMessages();
});
