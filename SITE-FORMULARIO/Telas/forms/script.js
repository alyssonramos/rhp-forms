let contador = 2; // Inicia o contador em 2, já que a primeira pergunta já está presente

function adicionarFormulario(botao) {
  // Obtém o elemento pai do botão clicado (div.perguntas)
  const divPerguntas = botao.parentNode;

  // Cria uma nova div de perguntas
  const novaDivPerguntas = document.createElement("div");
  novaDivPerguntas.className = "perguntas";

  // Cria o conteúdo interno da nova div de perguntas
  const novoConteudo = `
    <div class="container">
      <h2>Pergunta ${contador}</h2>
    </div>
    <input type="text" name="text" class="input" placeholder="Insira a pergunta:">
    <button onclick="adicionarFormulario(this)">Adicionar</button>
  `;

  // Define o conteúdo interno da nova div de perguntas
  novaDivPerguntas.innerHTML = novoConteudo;

  // Insere a nova div de perguntas logo após a div atual
  divPerguntas.parentNode.insertBefore(novaDivPerguntas, divPerguntas.nextSibling);

  contador++; // Incrementa o contador para a próxima pergunta
}

const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('.nav-link');
const container = getElement('.modal-container');
const modal = getElement('.modal');

const activeModalClass = 'modal-show';

const openModal = () => {
  // Verifica se todos os campos de texto estão preenchidos
  const camposTexto = document.querySelectorAll(".perguntas input[type='text']");
  let camposVazios = false;

  camposTexto.forEach(function(campo) {
    if (campo.value === "") {
      camposVazios = true;
    }
  });

  // Se houver campos vazios, exibe uma mensagem de erro
  if (camposVazios) {
    alert("Por favor, preencha todos os campos antes de abrir o modal.");
  } else {
    container.classList.add(activeModalClass);
  }
};

const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
	if (modal.contains(event.target)) return;
	
	closeModal();
});


//Validação do formulário


// Seleciona o botão "Enviar formulário"
const enviarFormularioBtn = document.querySelector(".footer button");

// Adiciona um manipulador de evento ao botão "Enviar formulário"
enviarFormularioBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Impede o comportamento padrão do botão (enviar o formulário)

  // Seleciona todos os campos de entrada de texto no formulário
  const camposTexto = document.querySelectorAll(".perguntas input[type='text']");

  // Verifica se algum campo de texto está vazio
  let camposVazios = false;
  camposTexto.forEach(function(campo) {
    if (campo.value === "") {
      camposVazios = true;
    }
  });
});

