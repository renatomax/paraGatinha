// Função que recebe um array de elementos HTML e alterna a classe "sai-fade" dependendo da posição do elemento na tela do usuário
function toggleFade(elements) {
  // Obter a altura da janela do navegador
  let windowHeight = window.innerHeight;
  // Adicionar um evento de rolagem ao objeto window
  window.addEventListener("scroll", function () {
    // Percorrer cada elemento do array
    for (let element of elements) {
      // Obter a posição do elemento em relação ao topo e ao fundo da página
      let elementTop = element.getBoundingClientRect().top;
      let elementBottom = element.getBoundingClientRect().bottom;
      // Obter a altura do elemento
      let elementHeight = elementBottom - elementTop;
      // Se o elemento estiver completamente fora da tela do usuário, seja pela parte de cima ou de baixo
      if (
        elementTop < -elementHeight ||
        elementBottom > windowHeight + elementHeight
      ) {
        // Adicionar a classe "sai-fade" ao elemento
        element.classList.add("sai-fade");
      } else {
        // Remover a classe "sai-fade" do elemento
        element.classList.remove("sai-fade");
      }
    }
  });
}

let elementosFada = document.querySelectorAll(".elselec");

toggleFade(elementosFada);
