// desafioI.js
// Función para obtener los posts desde la API
const obtenerPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    /* if (!response.ok) {
      throw new Error(`Error al obtener los posts: ${response.status}`);
    } */
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los posts");
  }
};
// Función para mostrar los posts en el contenedor
const mostrarPosts = (posts) => {
  const postContainer = document.getElementById("post-data");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    const postHTML = `
      <ul>
        <li><strong>${post.title}</strong><br>${post.body}</li>
      </ul>
    `;
    const postElement = document.createElement("div");
    postElement.innerHTML = postHTML;
    postContainer.appendChild(postElement);
  });
};
// Función principal para obtener y mostrar los posts
const getPosts = async () => {
    const posts = await obtenerPosts();
    mostrarPosts(posts);
};
// Agregar un listener de eventos al botón para llamar a la función getPosts
document.getElementById("get-posts").addEventListener("click", getPosts);
