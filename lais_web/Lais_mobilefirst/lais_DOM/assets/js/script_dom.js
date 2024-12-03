
// Isso serve para dar boas vindas ao usuario...
// window.alert(`Bem vindo a game of thrones!`)

// O confirm, para receber ou continuar novos assuntos.
// window.confirm(`Bem vindo a game of thrones`)


// Window.console(`Informação do usuario recebida, sucesso`)

//  document.getElementById('add-item-btn').addEventListener('click', function() {
//     var newItem = document.createElement('li');
//     newItem.textContent = 'cachorro';
//     document.getElementById('dynamic-list').appendChild(newItem);
//  });

// document.getElementById('change-color-btn').addEventListener('click', function() {
//    document.body.style.backgroundColor = 'green';
//  });


// 1- Esse comando usa um formulário que vai executar a função só se for preenchido.
// 2- 
// 
// a ultima linha; se der algum tipo de erro ao enviar a mensagem,
// vai aparecer uma mensagem mandando preencher a "caixa de mensagem".


document.getElementById('user-form').addEventListener('submit', function(e) {
   var name = document.getElementById('name').value;
   if(name === '') {
      e.preventDefault();
      document.getElementById('error-message').style.display = 'block';
   }
});