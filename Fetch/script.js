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
    try {
        const reponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        //Permet de récuperer la réponse sous forme d'objet JSON (qui sera dans un tableau)
        const posts = await reponse.json();
        console.log(reponse);
        console.log(posts);
        //On initialise notre affichage à vide

        postsContainer.innerHTML = "";
        console.log(postsContainer);
        // On demande à parcourir notre tableau et on donne un nom (ici post) à tous nos index. On créé ensuite un nouvel élément (ici une div qui contiendra un h3 et un p)
        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList = "post";
            //  Lors de la création de ces div, on injecte du HTML en récupérant le titre(h3 = title) et le corps du post (p=body) que l'on a sous JSON
            postDiv.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>`;

            postsContainer.appendChild(postDiv);
            console.log(post);
        });
    } catch (error) {
        console.log("Erreur lors du chargement des posts");
        alert("Un problème est survenu lors du chargement des pots");
    }
}
chargerPosts();
