var maior, menor, num, r

for(num=0;num<5;num++){
    r=prompt("Insira um valor: ")
    if (num==0){
        maior=r
        menor=r
    }
    else{
        if(r<menor){
            menor=r
        }
        if(r>maior){
            maior=r
        }
    }
}
alert("O maior valor é: "+maior+"\nO menor valor é:"+menor)