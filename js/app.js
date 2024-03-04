const insert = document.getElementById("insert");
const form = document.getElementById("signup");
const btn = document.getElementById("btn");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="key"> ${e.key} <small>event.key</small> </div>
  <div class="key"> ${e.keyCode} <small>event.keyCode</small> </div>
  <div class="key"> ${e.code} <small>event.code</small> </div>`;
});
