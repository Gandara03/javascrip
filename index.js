const API_URL = "https://jsonplaceholder.typicode.com";
const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
  .then(response => response.json())
  .then(users => {
    const tpl = users.map(user => `<li>----nombre:${user.name} -----email:${user.email} ----telefono:${user.phone}</li>`).join("");
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
  })
  .catch(error => {
    console.error('Error al obtener datos de usuarios:', error);
  });