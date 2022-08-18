const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]


for(i=0; i<array.length;i++){
        resultado = `Jogador 1 fez ${i+1}  `
        for(x=0;x<array[i].length;x++){

            resultado += `${array[i][x]} `
        }
        console.log(resultado)


}


/*for (let i in filmes) {
    let mensagem
        mensagem = `Filme: ${filmes[i].titulo}, Ano: ${filmes[i].ano}, Diretor: ${filmes[i].diretor}. Tem no elenco: `
        for (let j of filmes[i].elenco) {
            mensagem = mensagem + `${filmes[i].elenco,[j]} `
        }
    console.log(mensagem)
}*/

