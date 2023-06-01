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


function validateForm() {
  // Get all input elements within the form
  var inputs = document.getElementById("myForm").getElementsByTagName("input");

  // Loop through each input and check if it is empty
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("Please fill in all fields.");
      return false;
    }
  }

  // If all fields are filled, allow form submission
  return true;
}