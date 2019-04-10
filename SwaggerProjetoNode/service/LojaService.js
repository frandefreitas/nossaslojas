'use strict';


/**
 * Atualiza Loja
 * Atualiza os dados da loja tendo como referência seu id.
 *
 * id Long 
 * telefone String 
 * endereco String 
 * cnpj String 
 * horario String 
 * cidade String 
 * estado String 
 * no response value expected for this operation
 **/
exports.atualizaLoja = function(id,telefone,endereco,cnpj,horario,cidade,estado) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cadastrar Loja
 * Cadastra uma nova loja
 *
 * loja_ Loja  (optional)
 * returns Loja
 **/
exports.cadastraLoja = function(loja_) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "53991626393",
  "cidade" : "Pelotas",
  "estado" : "Rio Grande do Sul",
  "endereco" : "Rua Ernani Osmar Blass, 417, Ap.2 - Três Vendas.",
  "horario" : "Quarta-feira as 21:45.",
  "id" : 234,
  "cnpj" : "01234567890123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Excluir Loja
 * Exclusão da lojas pelo id
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.excluiLojas = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Listar Lojas
 * Listar todas as lojas existentes.
 *
 * returns Loja
 **/
exports.listaTodas = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "53991626393",
  "cidade" : "Pelotas",
  "estado" : "Rio Grande do Sul",
  "endereco" : "Rua Ernani Osmar Blass, 417, Ap.2 - Três Vendas.",
  "horario" : "Quarta-feira as 21:45.",
  "id" : 234,
  "cnpj" : "01234567890123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loja pelo Estado
 * Consulta uma determinada loja pelo seu estado.
 *
 * estado Long 
 * returns Loja
 **/
exports.lojaPeloEstado = function(estado) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "53991626393",
  "cidade" : "Pelotas",
  "estado" : "Rio Grande do Sul",
  "endereco" : "Rua Ernani Osmar Blass, 417, Ap.2 - Três Vendas.",
  "horario" : "Quarta-feira as 21:45.",
  "id" : 234,
  "cnpj" : "01234567890123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loja pelo Estado e Cidade
 * Consulta uma determinada loja pelo seu estado e sua cidade.
 *
 * estado Long 
 * cidade Long 
 * returns Loja
 **/
exports.lojaPeloEstadoCidade = function(estado,cidade) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "53991626393",
  "cidade" : "Pelotas",
  "estado" : "Rio Grande do Sul",
  "endereco" : "Rua Ernani Osmar Blass, 417, Ap.2 - Três Vendas.",
  "horario" : "Quarta-feira as 21:45.",
  "id" : 234,
  "cnpj" : "01234567890123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Loja pelo Id
 * Consulta uma determinada loja pelo seu id.
 *
 * id Long 
 * returns Loja
 **/
exports.lojaPeloId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "telefone" : "53991626393",
  "cidade" : "Pelotas",
  "estado" : "Rio Grande do Sul",
  "endereco" : "Rua Ernani Osmar Blass, 417, Ap.2 - Três Vendas.",
  "horario" : "Quarta-feira as 21:45.",
  "id" : 234,
  "cnpj" : "01234567890123"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

