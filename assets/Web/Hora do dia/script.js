function carregar() {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML += `<p>BOM DIA!</p>`
        img.src = 'flat-morning.png'
        document.body.style.backgroundColor = '#0cf'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        msg.innerHTML += `<p>BOA TARDE!</p>`
        img.src = 'flat-afternoon.png'
        document.body.style.backgroundColor = '#e92'
    } else {
        //BOA NOITE
        msg.innerHTML += `<p>BOA NOITE!</p>`
        img.src = 'flat-night.png'
        document.body.style.backgroundColor = '#258'
    }
}