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
  


  //Validação do formulário
  
// Seleciona o botão "Enviar formulário"
const enviarFormularioBtn = document.querySelector(".footer button");

// Adiciona um manipulador de evento ao botão "Enviar formulário"
enviarFormularioBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Impede o comportamento padrão do botão (enviar o formulário)

  // Verifica se algum campo de texto está vazio
  const camposTexto = document.querySelectorAll(".formulario input[type='text']");
  const camposRadio = document.querySelectorAll(".formulario input[type='radio']");
  const camposDate = document.querySelectorAll(".formulario input[type='date']");
  let camposVazios = false;

  camposTexto.forEach(function(campo) {
    if (campo.value.trim() === "") {
      camposVazios = true;
    }
  });

  // Se houver campos vazios, exibe uma mensagem de erro
  if (camposVazios) {
    alert("Por favor, preencha todos os campos antes de enviar o formulário.");
  } else {
    // Se todos os campos estiverem preenchidos, você pode redirecionar para a próxima página
    // ou executar outra ação desejada
    alert("Formulário enviado com sucesso!");
    window.location.href = "pos_form.html"; // Redireciona para a próxima página
  }
});


