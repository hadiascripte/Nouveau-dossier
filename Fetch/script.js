// Sélection des éléments
const postsContainer = document.querySelector("#posts");
const loadPostsBtn = document.querySelector("#loadPostsBtn");
const submitBtn = document.querySelector("#submitBtn");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");
const reponseDiv = document.querySelector("#reponse");
console.log(postsContainer);

// ----------- GET (pour récuperer) -----------
// CHARGER LES POSTS avec une fonction async pour laisser le tmeps de chargement de récupération des données.

async function chargerPosts() {
    const postsContainer = document.querySelector("#posts");
    try {
        const reponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        //Permet de récuperer la réponse sous forme d'objet JSON (qui sera dans un tableau)
        const posts = await reponse.json();
        //   console.log(reponse);
        //   console.log(posts);
        //On initialise notre affichage à vide

        postsContainer.innerHTML = "";
        //   console.log(postsContainer);
        // On demande à parcourir notre tableau et on donne un nom (ici post) à tous nos index. On créé ensuite un nouvel élément (ici une div qui contiendra un h3 et un p)
        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList = "post";
            //  Lors de la création de ces div, on injecte du HTML en récupérant le titre(h3 = title) et le corps du post (p=body) que l'on a sous JSON
            postDiv.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>`;

            postsContainer.appendChild(postDiv);
            // console.log(post);
        });
    } catch (error) {
        console.log("Erreur lors du chargement des posts");
        alert("Un problème est survenu lors du chargement des pots");
    }
}

// ----------- POST (pour envoyer) -----------
//
submitBtn.addEventListener("click", ajouterPost());
async function ajouterPost() {
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    console.log(title);
    console.log(body);

    if (!title || !body) {
        return alert("Veuillez remplir tous les champs ...");
    }
    try {
        // On créé un fetch (promesse) en indiquant où l'on veut envoyer le post.
        const res = await fetch(
            "https://httpbin.org/post", //Il est obligatoire de préciser la méthode (method) qui sera utiliser pour l'envoie de cet post.

            {
                // Ici pour post, ondoit lui dire sous quel format on envoie la réponse
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, body, userId: 1 }),
            }
        );
        const data = await res.json();
        reponseDiv.textContent = `Post créé avec succès (ID : ${data.id})`;
        console.log(res);
        //   console.log(data);
    } catch (err) {
        console.log("Erreur lors de l'envoie du post:", err);
        alert("Erreur lors de l'envoie");
    }
}
submitBtn.addEventListener("click", ajouterPost());
loadPostsBtn.addEventListener("click", chargerPosts());
chargerPosts();
