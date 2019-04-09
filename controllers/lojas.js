module.exports = function(app){
    app.get('/lojas', function(req, res){
      console.log('Recebida requisicao de teste na porta 3000.')
      res.send('OK.');
    });



    app.post("/lojas/loja",function(req, res) {
        var loja = req.body;

        req.assert("endereco", "Endereço é obrigatória.").notEmpty();
        req.assert("telefone", "Telefone é obrigatória.").notEmpty();
        req.assert("cnpj", "CNPJ é obrigatório ter 14 digitos.").notEmpty().len(14,14);
        req.assert("horario", "Horário é obrigatório.").notEmpty();
        req.assert("cidade", "Cidade é obrigatório").notEmpty();
        req.assert("estado", "Estado é obrigatório").notEmpty();
  
        var errors = req.validationErrors();
  
        if (errors){
            console.log("Erros de validação encontrados");
            res.status(400).send(errors);
            return;
        }
        console.log('Coletando lojas');
    
        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);
        console.log(loja);
        lojaDao.salva(loja, function(exception, result){
          console.log('loja criada: ' + result);
          res.json(loja);
        });
      });












}

