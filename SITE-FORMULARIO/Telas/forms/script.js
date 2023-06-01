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

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
	if (modal.contains(event.target)) return;
	
	closeModal();
});