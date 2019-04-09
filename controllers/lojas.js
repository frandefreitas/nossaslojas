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
      
            res.location('/lojas/loja/' + result.insertId);
      
            loja.id = result.insertId;
      
            res.status(201).json(loja);
        });
      });





    app.put('/lojas/loja/:id', function(req, res){

        var loja = req.body;
        var id = req.params.id;
        loja.id = id;
        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);

        lojaDao.atualiza(loja, function(erro){
            if (erro){
            res.status(500).send(erro);
            return;
            }
            console.log('loja editada');
            res.send(loja);
        });
    });



    app.delete('/lojas/loja/:id', function(req, res){

        var id = req.params.id;
        var connection = app.persistencia.connectionFactory(); 
        var lojaDao = new app.persistencia.LojaDao(connection);    
        lojaDao.delete(id, function(erro, resultado){  
            if(erro){
                res.status(500).send(erro);
                return;
            }
            console.log('Loja excluida com sucesso');
            res.status(204).send(id); 
        });            
    });



    app.get('/lojas/loja/:id', function(req, res){
        var id = req.params.id;
        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);    
        lojaDao.buscaPorId(id, function(erro, resultado){ 
            if(erro){
                console.log('erro ao consultar no banco: ' + erro);
                res.status(500).send(erro);
                return;
            }
            console.log('Loja: '+ JSON.stringify(resultado));
            res.json(resultado);
            return;
        })
        console.log('consultando loja pelo id:' + id);
    });


    app.get('/lojas/loja/estado/:estado', function(req, res){
        var estado = req.params.estado;
        while (estado.indexOf('+') > -1) {   //retorna o índice da primeira ocorrência do valor especificado
            estado = estado.replace('+', ' ');
        }  
        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);    
        console.log(estado);
        lojaDao.buscaPeloEstado(estado, function(erro, resultado){ 
            if(erro){
                console.log('erro ao consultar no banco: ' + erro);
                res.status(500).send(erro);
                return;
            }
            console.log('Loja: '+ JSON.stringify(resultado));
            res.json(resultado);
            return;
        })
        console.log('consultando loja pelo estado:' + estado);
    });



    app.get('/lojas/loja/', function(req, res){
        var id = req.params.id;
        var connection = app.persistencia.connectionFactory();
        var lojaDao = new app.persistencia.LojaDao(connection);    
        lojaDao.lista( function(erro, resultado){  
            if(erro){
                console.log('erro ao consultar no banco: ' + erro);
                res.status(500).send(erro);
                return;
            }
            console.log('Loja: '+ JSON.stringify(resultado));
            res.json(resultado);
            return;
        })
        console.log('consultando loja pelo id:' + id);
    });



}

