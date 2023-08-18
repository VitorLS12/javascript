function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente  novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute( 'id' , 'foto' )
        if (fsex[0].checked) {
        gênero = 'Mulher'
        if( idade >= 0 && idade < 5) {
            //Bebê 
            img.setAttribute('src' , 'imagens/bebe-f.webp')
        } else if( idade < 12){
            //Criança
           img.setAttribute('src' , 'imagens/criança-f.webp')
        }else if ( idade < 18){
            //Jovem
           img.setAttribute('src' , 'imagens/jovem-f.jpeg')
        }else if ( idade < 60) {
            //Adulto
            img.setAttribute('src' , 'imagens/adulto-f.jpeg')
        } else {
            //Idoso
           img.setAttribute('src' , 'imagens/idoso-f.jpeg')
        } 
        }else if (fsex[1].checked) {
        gênero = 'Homem'
        if( idade >= 0 && idade < 5) {
            //Bebê 
            img.setAttribute('src' , 'imagens/bebe-m.webp')
        } else if( idade < 12){
            //Criança
            img.setAttribute('src' , 'imagens/criança-m.jpeg')
        }else if ( idade < 18){
            //Jovem
            img.setAttribute('src' , 'imagens/jovem-m.jpeg')
        }else if ( idade < 60) {
            //Adulto
            img.setAttribute('src' , 'imagens/adulto-m.webp')
        } else {
            //Idoso
            img.setAttribute('src' , 'imagens/idoso-m.webp')
        } 
        } 
        res.innerHTML = ` ${gênero} com ${idade} anos `
        res.appendChild (img)
     
    }
}