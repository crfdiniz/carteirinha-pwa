const menu = document.getElementById("menu");
const btn = document.getElementById("menuBtn");

if (btn) {
  btn.onclick = () => {
    menu.classList.toggle("open");
  };
}

function irCarteira() {
  window.location.href = "carteira.html";
}


// Registra o Service Worker para permitir instalação como PWA.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(error => {
      console.error('Falha ao registrar o Service Worker:', error);
    });
  });
}
