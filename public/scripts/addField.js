/* ROTEIRO
1. Procurar o botão
2. Ação ao clicar o botão
3. Execução da ação
4. Duplicar os campos definindo quais campos
5. Pear os campos. Quais campos?
6. Limpar os campos que vão ser duplicados
6. Colocar essa duplicação aonde? */


document.querySelector('#add-time').addEventListener('click', cloneField);

//quando clicar no botão, a função abaixo será executada
function cloneField() {
  // Capturando o elemento e quando a função é ativada através do click, ele duplica esse elemento capturado. Mas para isso é preciso que o resultado seja true (indicado pelo programador colocando a palavra dentro dos parênteses). Se for true ele retorna a cópia do elemento e todos so seus descendentes.
  const newFieldContainer = document
    .querySelector('.schedule-item')
    .cloneNode(true); 

  // Capturando todos os inputs que estão dentro do schedule-item, para zerá-los na criação de um novo campo
  const fields = newFieldContainer.querySelectorAll('input');

  // A função colocada sem nome já faz com que ela rode diretamente sem precisar ser chamada. Aqui se traduz, para cada field, execute essa função. Mas é preciso pegar o field que vai ser zerado no momento
  fields.forEach(function (field) {
    // Pega o field do momento e limpa ele
    field.value = '';
  });

  document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
