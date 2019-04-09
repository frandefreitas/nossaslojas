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


## Instala��o do MySQL e configurando a persist�ncia
A primeira etapa para organizar a persist�ncia do projeto foi instalar o MySQL para isto foi necess�rio pelo terminal npm install --save mysql.

A pr�xima etapa foi no pr�prio PHPMyAdmin criar a base de dados e a tabela.
CREATE TABLE `lojas` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `endere�o` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `horario` varchar(255) NOT NULL,
  `cidade` varchar(30) NOT NULL,
  `estado` varchar(15) NOT NULL
) 


No c�digo fonte foi criado o arquivo connectionFactory.js para fazer a conex�o com o banco de dados com o c�digo abaixo.
var mysql  = require('mysql');

  function createDBConnection(){
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'projetonode'
    });
  }

  module.exports = function() {
    return createDBConnection;
  }

Al�m do connectionFactory.js foi criado o LojaDao.js, este arquivo para manipular e ter acessos aos objetos da tabela Loja.


## Fazer Requisi��es HTTP


### M�todo POST
A primeira etapa 
 