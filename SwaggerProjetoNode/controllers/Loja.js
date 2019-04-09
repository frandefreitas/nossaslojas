'use strict';

var utils = require('../utils/writer.js');
var Loja = require('../service/LojaService');

module.exports.atualizaLoja = function atualizaLoja (req, res, next) {
  var id = req.swagger.params['id'].value;
  var telefone = req.swagger.params['telefone'].value;
  var endereco = req.swagger.params['endereco'].value;
  var cnpj = req.swagger.params['cnpj'].value;
  var horario = req.swagger.params['horario'].value;
  var cidade = req.swagger.params['cidade'].value;
  var estado = req.swagger.params['estado'].value;
  Loja.atualizaLoja(id,telefone,endereco,cnpj,horario,cidade,estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cadastraLoja = function cadastraLoja (req, res, next) {
  var loja_ = req.swagger.params['loja_'].value;
  Loja.cadastraLoja(loja_)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.excluiTransacao = function excluiTransacao (req, res, next) {
  var id = req.swagger.params['id'].value;
  Loja.excluiTransacao(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaTodas = function listaTodas (req, res, next) {
  Loja.listaTodas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lojaPeloEstado = function lojaPeloEstado (req, res, next) {
  var estado = req.swagger.params['estado'].value;
  Loja.lojaPeloEstado(estado)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lojaPeloEstadoCidade = function lojaPeloEstadoCidade (req, res, next) {
  var estado = req.swagger.params['estado'].value;
  var cidade = req.swagger.params['cidade'].value;
  Loja.lojaPeloEstadoCidade(estado,cidade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lojaPeloId = function lojaPeloId (req, res, next) {
  var id = req.swagger.params['id'].value;
  Loja.lojaPeloId(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
