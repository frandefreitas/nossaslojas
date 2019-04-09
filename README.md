# Projeto Node - API Nossas Lojas
Reposit�rio criado com o prop�sito de realizar um e-commerce "Minhas Lojas", sua documenta��o com Swagger, o SGDB MySQL e a tecnologia interpretadora de c�digo JavaScript, Node.js.

## Descri��o do Projeto
A implementa��o de um API REST, consumindo microservi�o, utilizando a tecnologia de intepreta��o de c�digo JavaScript, Node.js, o banco de dados MySQL, este manipulado atrav�s da persist�ncia do projeto. 
Por este projeto ser� poss�vel criar, editar e excluir lojas. Tamb�m ser� poss�vel realizar sele��es, tais como selecionar todos as lojas, buscar por id, por estado e por estado/cidade.

## Criando a aplica��o
No primeiro commit foi criado o projeto Node. Onde foi iniciado o projeto com npm init. Ap�s isto, foi definido algumas caracter�sticas do projeto, e, por fim, foi baixado o arquivo atrav�s desse npm.
Antes de escrever o c�digo, ainda foi necess�rio instalar o express, depois criado o arquivo index.js e iniciado dentro dele o express.

Eu fiz este c�digo de teste:
var express = require('express');
var app = express();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});

app.get('/teste', function(req, res){
  console.log('Recebida requisicao de teste na porta 3000.')
  res.send('OK.');
});

Depois instalei o Nodemon para agilizar na execu��o n�o precisa toda hora estar startando o c�digo. 

 sudo npm install -g nodemon

E para finalizar a instala��o foi criado o arquivo o custom-express numa pastar config onde ser�o definidas algumas configura��es e o consign, este �ltimo para carregar todos os arquivos da pasta controller.




"##nossas lojas" 

### h3

## 
Titulo


#h1

