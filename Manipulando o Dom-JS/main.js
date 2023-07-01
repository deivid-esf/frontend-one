  import BotaoDeleta from "./componentes/deletaTarefa.js";
  import BotaoConclui from "./componentes/concluiTarefa.js";

  const criarTarefa = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valorInput = input.value;

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const content = `<p class="content">${valorInput}</p>`;

    tarefa.innerHTML = content;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = "";
  };

  const novaTarefa = document.querySelector("[data-form-button]");

  novaTarefa.addEventListener("click", criarTarefa);

