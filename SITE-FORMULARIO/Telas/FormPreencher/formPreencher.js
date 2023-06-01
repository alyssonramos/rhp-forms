function mostrarCampoTexto() {
    var campoTexto = document.getElementById("campoTexto");
    campoTexto.style.display = "block";
  }

  function ocultarCampoTexto() {
    var campoTexto = document.getElementById("campoTexto");
    campoTexto.style.display = "none";
  }
  

  function mostrarCampoTexto() {
    var campoTexto = document.getElementById('campoTexto');
    campoTexto.style.display = "block";
  }

  function mostrarCampoTexto(radio) {
    var campoTexto = radio.parentNode.nextElementSibling;
    campoTexto.style.display = radio.checked ? "block" : "none";
  }
  
  const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('.nav-link');
const container = getElement('.modal-container');
const modal = getElement('.modal');

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
	if (modal.contains(event.target)) return;
	
	closeModal();
});