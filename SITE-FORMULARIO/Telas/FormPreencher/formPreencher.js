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

// Função para mostrar/ocultar campo de texto
function mostrarCampoTexto(elemento) {
  var campoTexto = elemento.parentNode.nextElementSibling;
  if (elemento.value === 'outro') {
    campoTexto.style.display = 'block';
  } else {
    campoTexto.style.display = 'none';
  }
}

// Função para validar o formulário
function validarFormulario() {
  // Obtém todos os campos de texto do formulário
  var camposTexto = document.querySelectorAll('.campoTexto input[type="text"]');

  // Verifica se algum campo de texto obrigatório está vazio
  for (var i = 0; i < camposTexto.length; i++) {
    var campo = camposTexto[i];
    if (campo.value === '' && campo.hasAttribute('required')) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return false;
    }
  }

  // Obtém todas as respostas dos campos de rádio
  var respostas = document.querySelectorAll('input[type="radio"]:checked');

  // Verifica se alguma pergunta não foi respondida
  if (respostas.length !== 7) {
    alert('Por favor, responda todas as perguntas!');
    return false;
  }

  // Exibe os dados do formulário (apenas para fins de demonstração)
  exibirDadosFormulario();

  // Retorna true para permitir o envio do formulário
  return true;
}

// Função para exibir os dados do formulário
function exibirDadosFormulario() {
  var dadosPaciente = document.querySelector('.dadosPaciente');
  var perguntas = document.querySelectorAll('.perguntas');

  // Obtém os dados do paciente
  var nome = dadosPaciente.querySelector('input[name="nome"]').value;
  var idade = dadosPaciente.querySelector('input[name="idade"]').value;
  var sexo = dadosPaciente.querySelector('input[name="Sexo"]').value;
  var peso = dadosPaciente.querySelector('input[name="Peso"]').value;
  var dataNascimento = dadosPaciente.querySelector('input[type="date"]').value;
  var registro = dadosPaciente.querySelector('input[name="Registro"]').value;

  console.log('Dados do Paciente:');
  console.log('Nome:', nome);
  console.log('Idade:', idade);
  console.log('Sexo:', sexo);
  console.log('Peso:', peso);
  console.log('Data de Nascimento:', dataNascimento);
  console.log('Registro:', registro);

  // Obtém as respostas das perguntas
  perguntas.forEach(function (pergunta, index) {
    var resposta = pergunta.querySelector('input[type="radio"]:checked').value;
    var campoTexto = pergunta.querySelector('.campoTexto input[type="text"]');

    console.log('Pergunta ' + (index + 1) + ':');
    console.log('Resposta:', resposta);

    if (resposta === 'outro' && campoTexto) {
      console.log('Texto:', campoTexto.value);
    }
  });
}

// Adiciona evento de clique ao botão de envio do formulário
var enviarBotao = document.querySelector('.footer button');
enviarBotao.addEventListener('click', function (event) {
  event.preventDefault(); // Impede o envio do formulário padrão
  validarFormulario();
});
