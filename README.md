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


## Instalação do MySQL e configurando a persistência
A primeira etapa para organizar a persistência do projeto foi instalar o MySQL para isto foi necessário pelo terminal npm install --save mysql.

A próxima etapa foi no próprio PHPMyAdmin criar a base de dados e a tabela.
CREATE TABLE `lojas` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `endereço` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `horario` varchar(255) NOT NULL,
  `cidade` varchar(30) NOT NULL,
  `estado` varchar(15) NOT NULL
) 


No código fonte foi criado o arquivo connectionFactory.js para fazer a conexão com o banco de dados com o código abaixo.
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

Além do connectionFactory.js foi criado o LojaDao.js, este arquivo para manipular e ter acessos aos objetos da tabela Loja.


## Fazer Requisições HTTP


### Método POST
A primeira etapa 
 