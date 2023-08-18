function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/Manha-circulo.png'
        document.body.style.background = '#ab8c78'
    }
    else if (hora >= 12 && hora <= 18 ) {
        img.src = 'imagens/Tarde-circulo.png'
        document.body.style.background = '#ff7006'
    } else{
        img.src = 'imagens/Noite-circulo.png'
        document.body.style.background = '#24353d'
    }
}

