var a=0, b=0, cont, c, i, v=[]

cont=prompt("Digite o número correspondente ao valor da sequência de fibonacci que você deseja: ")

	for(i=0;i<parseFloat(cont); i++){
		if(i==1){
			a=1;
		}
        if (i==2) {
            b=0;
        }
		c=a+b;
		b=a
		a=c
		v[i]=c
		
	}
	alert(v)