let numeroUsurio = +prompt(`Digite um número:`)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in numeros){
    console.log((Number(i) + 1)*numeroUsurio)
}