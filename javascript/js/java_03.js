var bim, nota, media, conceito
    nota=0.0
    media=0.0
    bim=1
    conceito=0.0
    while (bim<=4) {
        nota=prompt("Digite a nota do "+ bim+ "° bimenstre: ")
        conceito= parseFloat(nota)+parseFloat(conceito)
        bim++
    }
    media= parseFloat(conceito)/4
    if (media>=9) {
        alert("Conceito A.\nMédia: "+media+"\nAprovado!")
    }
    else if (media>=8) {
        alert("Conceito B.\nMédia: "+media+"\nAprovado!")
    }
    else if(media>=7){
        alert("Conceito C.\nMédia: "+media+"\nAprovado!")
    }
    else if(media<7) {
        alert("Conceito D.\nMédia: "+media+"\nReprovado!")

    }