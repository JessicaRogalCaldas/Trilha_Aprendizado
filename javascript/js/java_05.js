var termo, razao, quant_e, elem, cont
termo=0.0
razao=0.0
quant_e=0.0
elem=0.0
cont=0.0
termo=prompt("Digite o primeiro termo da Progressão Gemométrica: ")
razao=prompt("Digite a Razão da Progressão Geométrica: ")
quant_e=prompt("Digite a quantidade de elementos da Progressão Geométrica: ")
document.write("Progressão geométrica com o primeiro termo sendo "+termo+ " e com a razão "+razao+" é: ")
document.write(termo+"  ")
while (cont<quant_e-1) {
    elem =parseInt(termo)*parseInt(razao)
    termo=elem
    document.write(elem+"  ")
    cont++
}