// selection des donnee
const postsContainer = document.querySelector("#posts");
const loadPostsBtn = document.querySelector("#loadPostsBtn");
const submitBtn = document.querySelector("#submitBtn");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");
const reponseDiv = document.querySelector("#reponse");

// ----------------GET-------------------
// CHANGER LES POSTS AVEC UNE FONCTION

async function changerPosts() {
    // pour le fetch (qui est une promesse) en premier parametre pour obtenir une ressource, on a l'url. pour avoir notre post
    try {
        const reponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts/?_limit=10"
        );
        console.log(reponse);

        // le .json permet de recuperer la reponse directement sous forme d'objet json dans un tableau

        const posts = await reponse.json();
        console.log(posts);

        postsContainer.innerHTML = "";

        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList = "post";
            postDiv.innerHTML = `<h3> ${post.title}</h3>
              <p> ${post.body}<p/>`;

            postsContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.log("Erreur lors du chargement des posts : ", error);
        alert("Un probleme est survenu lors du chargement des posts");
    }
}

//---------------- FONCTION POST POUR ENVOYER UN POST---------------------------

submitBtn.addEventListener("click", ajouterPost);
async function ajouterPost() {
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title || !body) {
        alert("Veillez remplir tous les champs..");
        return;
    }
    try {
        // dans une methode post on est obliger d'avoir des option
        // il faut preciserles conditions
        const res = await fetch("https://httpbin.org/post", {
            method: "POST",
            // header comme la balise head en html on la voit pas mais important, c'est pour dire pourquoi on envoie le post et par quoi on le contact
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body, userId: 1 }),
        });
        const data = await res.json();
        reponseDiv.textContent = `Post créer avec succes (iD): ${data.id}`;
        console.log(res);
    } catch (err) {
        console.error("Erreur lors de l'envoie du post :", err);
        alert("Erreur lors de l'envoi.");
    }
}
submitBtn.addEventListener("click", ajouterPost);
loadPostsBtn.addEventListener("click", ajouterPost);
changerPosts();
