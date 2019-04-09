var app = require('./config/custom-express')();

app.listen(3000, function(){
  console.log('Servidor rodando na porta 3000.');
});

app.post("/pagamentos/pagamento",function(req, res) {
  var pagamento = req.body;
  console.log(pagamento);
  res.send('ok');
});