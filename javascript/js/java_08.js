var x, f
x=prompt("Digite o valor a ser fatorado: ")
f=x
while (x > 1){
    f = f *(x-1);x--
    alert("Multiplicação: "+x+"*\nFatoração final: "+f+"!")
}