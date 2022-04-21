var usuario = {
    nome:"Lucas Gonçalves Berti",
    idade: 30,
    filiacao: ['Emilio Berti Junior' , 'Luciane de Oliveira Gonçalves'],
    endereco:{
         rua: "Doutor Ephigenio Barbosa da Silva",
         bairro: "Jardim Cidade Universitaria",
         cidade: "João Ppessoa"
    },
    dadosCompletos: function(){
        if(this.nome == String || this.idade == Number || this.filiacao == Array || this.endereco == Object)
            return true;
        else{
            return false;
        }
    }
}
 var usuario2 = {
    nome: "Murilo Moraes Berti",
    idade: 2,
    filiacao: ['Leandro José Gonçalves Berti', 'Elaine Moraes'],
    endereco: {
        rua:"Eunice de Sousa Setti",
        bairro: "Cidade Verde",
        cidade: "João Pessoa"
    },
    dadosCompletos: function(){
        if(this.nome == String || this.idade == Number || this.filiacao == Array || this.endereco == Object)
            return true;
        else{
            return false;
        }
    }
}
function resultado(){

    console.log(usuario.nome)
    console.log(usuario2.filiacao[1])
    console.log(usuario.endereco)
}

console.log(usuario.dadosCompletos())
console.log(usuario2.dadosCompletos())



