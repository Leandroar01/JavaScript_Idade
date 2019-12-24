function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtAno')
    var res = window.document.querySelector ('div#res')
   
    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = window.document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = window.document.createElement ('img')
        img.setAttribute('id','foto')
            if (fsex[0].checked){
                genero = 'Masculino'
                    if(idade>=0 && idade < 10){
                    // crianca
                    img.setAttribute('src','homem_crianca_.png')

                    }else if(idade < 21){
                        // adulto
                        img.setAttribute('src','homem_jovem_.png')
                    }else if(idade < 50){
                        img.setAttribute('src', 'homem_.png')
                    }
                    else{
                        //idoso
                        img.setAttribute('src', 'homem_velha_.png')
                    }
            }else{
                genero = "Feminino"
                    if (idade >= 0 && idade < 10 ){
                        // crianca
                        img.setAttribute('src','mulher_crianca_.png')
                        
                    } else if (idade < 21 ){
                        // adulto
                        img.setAttribute('src','mulher2_jovem_.png')

                    }else if(idade < 50){
                        img.setAttribute('src','mulher_jovem_.png')
                                                              
                     }else{
                        // velho
                        img.setAttribute('src','mulher_velha_.png')
                    }

            }

        res.innerHTML = `Sexo ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}
