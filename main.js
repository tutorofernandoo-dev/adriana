// --- Secuencia de frases tipo "From Peyo" ---
document.addEventListener("DOMContentLoaded", () => {
  const hello = document.querySelector(".hello");
  const name = document.querySelector(".name");

  // Bloques de texto (cada par: línea 1, línea 2 con color)
  const bloques = [
    ["mi amor yo feliz", { texto: "pork toy contigo", color: "color-1" }],
    ["ya k somos novios vamos a", { texto: "construir mucho mi amor", color: "color-2" }],
    ["nuestra kasita una vida", { texto: "juntos amor", color: "color-3" }],
    ["t kiero mucho mi amor ady", { texto: "from peyo", color: "color-4" }]
  ];

  let index = 0;

  function mostrarBloque() {
    const [linea1, linea2] = bloques[index];
    hello.textContent = linea1;
    name.textContent = "";
    name.className = "name"; // resetear clases

    // Mostrar primera línea
    setTimeout(() => {
      hello.classList.add("show");
    }, 100);

    // Mostrar segunda línea con color después de 2 segundos
    setTimeout(() => {
      name.textContent = linea2.texto;
      name.classList.add(linea2.color);
      name.classList.add("show");
    }, 2100);

    // Si no es el último bloque, ocultar después de 5 segundos
    if (index < bloques.length - 1) {
      setTimeout(() => {
        hello.classList.remove("show");
        name.classList.remove("show");
      }, 6000);

      // Pasar al siguiente bloque
      setTimeout(() => {
        index++;
        mostrarBloque();
      }, 7500);
    }
  }

  // Esperar 5 segundos antes de iniciar
  setTimeout(mostrarBloque, 5000);
});




  const maxDrops = 100;
  let activeDrops = 0;

  function createRaindrop() {
    if (activeDrops >= maxDrops) return;
    const drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = 0.5 + Math.random() * 1.5 + "s";
    document.body.appendChild(drop);
    activeDrops++;
    drop.addEventListener("animationend", () => {
      drop.remove();
      activeDrops--;
    });
  }

  setInterval(createRaindrop, 100); // cada 0.1s cae una gota

onload = () =>{
        document.body.classList.remove("container");
};
