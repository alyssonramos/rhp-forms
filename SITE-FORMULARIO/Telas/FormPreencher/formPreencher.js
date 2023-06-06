// Variáveis globais
const campoTexto = document.getElementById('campoTexto');
const button = document.querySelector('.nav-link');
const container = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const camposTexto = document.querySelectorAll('.campoTexto input[type="text"]');
const respostas = document.querySelectorAll('input[type="radio"]:checked');
const activeModalClass = 'modal-show';

// Função para mostrar campo de texto
function mostrarCampoTexto(elemento) {
  const campoTexto = elemento.parentNode.nextElementSibling;
  campoTexto.style.display = elemento.value === 'outro' ? 'block' : 'none';
}

// Função para abrir o modal
function openModal() {
  container.classList.add(activeModalClass);
}

// Função para fechar o modal
function closeModal() {
  container.classList.remove(activeModalClass);
}

// Event listener para abrir o modal
button.addEventListener('click', openModal);

// Event listener para fechar o modal
container.addEventListener('click', (event) => {
  if (!modal.contains(event.target)) {
    closeModal();
  }
});

// Função para validar o formulário
function validarFormulario() {
  if (!validarCamposTexto() || !validarRespostas()) {
    return false;
  }

  exibirDadosFormulario();
  return true;
}

// Função para validar campos de texto
function validarCamposTexto() {
  for (const campo of camposTexto) {
    if (campo.value === '' && campo.hasAttribute('required')) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return false;
    }
  }
  return true;
}

// Função para validar respostas de rádio
function validarRespostas() {
  if (respostas.length !== 7) {
    alert('Por favor, responda todas as perguntas!');
    return false;
  }
  return true;
}

// Função para exibir dados do formulário
function exibirDadosFormulario() {
  // Implemente o código para exibir os dados do formulário aqui
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
