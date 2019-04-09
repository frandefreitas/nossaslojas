# Projeto Node - API Nossas Lojas
Repositório criado com o propósito de realizar um e-commerce "Minhas Lojas", sua documentação com Swagger, o SGDB MySQL e a tecnologia interpretadora de código JavaScript, Node.js.

## Descrição do Projeto
A implementação de um API REST, consumindo microserviço, utilizando a tecnologia de intepretação de código JavaScript, Node.js, o banco de dados MySQL, este manipulado através da persistência do projeto. 
Por este projeto será possível criar, editar e excluir lojas. Também será possível realizar seleções, tais como selecionar todos as lojas, buscar por id, por estado e por estado/cidade.

## Criando a aplicação
No primeiro commit foi criado o projeto Node. Onde foi iniciado o projeto com npm init. Após isto, foi definido algumas características do projeto, e, por fim, foi baixado o arquivo através desse npm.
Antes de escrever o código, ainda foi necessário instalar o express, depois criado o arquivo index.js e iniciado dentro dele o express.

Eu fiz este código de teste:
var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});

app.get('/teste', function(req, res){
  console.log('Recebida requisicao de teste na porta 3000.')
  res.send('OK.');
});

Depois instalei o Nodemon para agilizar na execução não precisa toda hora estar startando o código. 

 sudo npm install -g nodemon

E para finalizar a instalação foi criado o arquivo o custom-express numa pastar config onde serão definidas algumas configurações e o consign, este último para carregar todos os arquivos da pasta controller.




"##nossas lojas" 

### h3

## 
Titulo


#h1

