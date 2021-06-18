function slides(){ // Function principal. Ela é chamada novamente no fim do código.
    var sld = document.querySelector('.slider')
    var img = document.createElement('img') // cria a tag img

    sld.style.height = '300px'
    sld.style.overflow = 'hidden'
    img.style.width = '100%'

    img.setAttribute('src', 'flat-night.png') //seleciona slide 1
    sld.appendChild(img)
    
    setTimeout(sld2,3000)
    function sld2() {
        img.setAttribute('src', 'flat-morning.png') //seleciona slide 2
        
        setTimeout(sld3,3000)
        function sld3() {
            img.setAttribute('src', 'flat-afternoon.png') //seleciona slide 3

            setTimeout(sld1,3000)
            function sld1() {
                img.setAttribute('src', 'flat-night.png') //retorna ao slide 1
                img.removeAttribute('src') //apaga a tag img
                setTimeout(slides,0000) //Para criar um loop, chama a function principal
            }
        }           
    }   
}