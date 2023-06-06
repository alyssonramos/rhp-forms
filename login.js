let inputs = document.querySelectorAll(".input");
      let personIcon = document.querySelector(".bi-person");
      let lockIcon = document.querySelector(".bi-file-lock2");

      inputs.forEach((input, index) => {
        let label = input.nextElementSibling; // assume que o label é o próximo elemento após o campo de entrada
        input.addEventListener("focus", function () {
          this.classList.add("focused");
          if (index === 0) {
            personIcon.style.fill = "#10B981";
          } else if (index === 1) {
            lockIcon.style.fill = "#10B981";
          }
        });

        input.addEventListener("blur", function () {
          this.classList.remove("focused");
          if (this.value !== "") {
            // se o campo de entrada não estiver vazio
            label.classList.add("filled"); // adicione a classe 'filled' ao label
          } else {
            label.classList.remove("filled"); // caso contrário, remova a classe 'filled' do label
          }
          if (index === 0) {
            personIcon.style.fill = "currentColor";
          } else if (index === 1) {
            lockIcon.style.fill = "currentColor";
          }
        });
      });

      window.onload = function () {
        // Seleciona o botão de enviar
        var btnEnviar = document.querySelector(".btnLogin");

        // Adiciona o evento de clique ao botão
        btnEnviar.addEventListener("click", function (event) {
          // Seleciona os campos de input
          var matriculaInput = document.querySelector(".Login_user input");
          var senhaInput = document.querySelector(".Login_senha input");

          // Verifica se algum campo está vazio
          if (matriculaInput.value === "" || senhaInput.value === "") {
            // Impede o envio do formulário
            event.preventDefault();

            // Exibe uma mensagem de erro
            alert("Por favor, preencha todos os campos antes de prosseguir.");
          }
        });
      }

      // Seleciona todos os campos de login
    var input = document.querySelectorAll(".input");
    var input2 = document.querySelectorAll(".input2");

    // Adiciona um ouvinte a cada campo de login
    input.forEach(function(campo, index) {
        campo.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                // Seleciona o botão de login correspondente ao campo de entrada
                var botaoLogin = document.querySelectorAll(".btnLogin")[index];
                botaoLogin.click();
            }
        });
    });
    input2.forEach(function(campo, index) {
        campo.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                // Seleciona o botão de login correspondente ao campo de entrada
                var botaoLogin = document.querySelectorAll(".btnLogin")[index];
                botaoLogin.click();
            }
        });
    });
