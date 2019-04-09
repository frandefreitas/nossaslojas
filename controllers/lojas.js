module.exports = function(app){
    app.get('/lojas', function(req, res){
      console.log('Recebida requisicao de teste na porta 3000.')
      res.send('OK.');
    });
  }