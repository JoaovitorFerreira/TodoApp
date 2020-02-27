//classe de middleware

module.exports = function(req, res, next){
    //cabecalhos na resposta(response) no qual serao adicionados para permissao ao acesso do site
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}