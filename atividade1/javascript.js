/* let contador = 0;
console.log(`O valor do contador é ${contador}`);

function clicar() {
contador += 1;
console.log(`O valor do contador agora é: ${contador}`)

}

function zerar() {
contador = 0;
console.log(`O valor do contador foi zerado`)

} */

let cliques = 0;
function contar() {
    cliques ++ ;
    resultado.innerHTML = `<p> O contador está com <mark>${cliques} </mark> cliques. </p>`
}
function zerar() {
    cliques = 0;
    resultado.innerHTML = `<p> O contador está com <mark>${cliques} </mark> cliques. </p>`
}