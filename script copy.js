// ============================
// ANIMAÇÃO AO ROLAR
// ============================
const elementos = document.querySelectorAll('.reveal');

function mostrarAoRolar() {
  const alturaTela = window.innerHeight;

  elementos.forEach((el) => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 80) {
      el.classList.add('ativo');
    }
  });
}

window.addEventListener('load', mostrarAoRolar);
window.addEventListener('scroll', mostrarAoRolar);


// ============================
// EFEITO DIGITANDO (CORRIGIDO)
// ============================
const nomeTexto = "Rafael Soares";
const elementoNome = document.getElementById("nome");

let i = 0;

function escreverNome() {
  if (!elementoNome) return;

  // limpa antes de começar
  if (i === 0) {
    elementoNome.innerHTML = "";
  }

  if (i < nomeTexto.length) {
    elementoNome.innerHTML += nomeTexto.charAt(i);
    i++;
    setTimeout(escreverNome, 80);
  }
}

window.addEventListener("load", escreverNome);


// ============================
// LUZ DO MOUSE
// ============================
const luz = document.querySelector(".luz");

document.addEventListener("mousemove", (e) => {
  if (luz) {
    luz.style.left = e.clientX + "px";
    luz.style.top = e.clientY + "px";
  }
});

const fundo = document.querySelector("body");
const camada = document.querySelector("body::before"); // só referência mental

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 15;
  const y = (e.clientY / window.innerHeight - 0.5) * 15;

  // move o fundo suavemente (efeito parallax leve)
  document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;

  // move o pseudo-elemento via CSS variável
  document.documentElement.style.setProperty("--moveX", `${x}px`);
  document.documentElement.style.setProperty("--moveY", `${y}px`);
});

const bolhas = document.querySelectorAll('.bolhas span');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  bolhas.forEach((bolha, i) => {
    bolha.style.transform = `translate(${x * (i+1) * 0.1}px, ${y * (i+1) * 0.1}px)`;
  });
});

const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

let index = 1;

function updateCarousel() {
  cards.forEach((card, i) => {
    card.classList.remove('active');
    dots[i].classList.remove('active');
  });

  cards[index].classList.add('active');
  dots[index].classList.add('active');
}

document.querySelector('.next').onclick = () => {
  index = (index + 1) % cards.length;
  updateCarousel();
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
};