import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formularioPensamento = document.getElementById("pensamento-form");
  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);

  // Botão Cancelar
  const botaoCancelar = document.getElementById("botao-cancelar");
  if (botaoCancelar) {
    botaoCancelar.addEventListener("click", () => {
      formularioPensamento.reset();
    });
  }
});

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;
  
  try {
    if(id) {
      await api.editarPensamento({ id, conteudo, autoria})
    } else {
      await api.salvarPensamento({ conteudo, autoria });
    }
    ui.renderizarPensamentos();
    
    // Limpar o formulário após salvar
    document.getElementById("pensamento-form").reset();
  } catch (error) {
    console.error("Erro ao salvar pensamento:", error);
    alert("Erro ao salvar pensamento.");
  }
}
