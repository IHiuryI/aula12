let idade = 19;

if (idade < 16) {
    console.log(`Não tem idade para votar.`)
} else if (idade < 18 || idade >= 70) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
}