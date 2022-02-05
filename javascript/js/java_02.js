var escolha, c, cota
escolha=prompt("Para converter Real para Dólar digite 'd' \n Para converter Dólar para Real digite 'r'")
cota=prompt("Informe o valor  do dólar")
switch (escolha) {
    case 'd':{
        c=prompt("Digite o valor do real para a conversão em dólar: ")
        dolar=parseFloat(c)/cota
        alert("O valor do real convertido em dólar é:"+dolar)
        break;
    }
    case 'r':{
        c=prompt("Digite o valor do dólar para a conversão em real: " )
        real=parseFloat(c)*cota
        alert("O valor do dólar convertido em real é:"+real)
        break;
    }
}