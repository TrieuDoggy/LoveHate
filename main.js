var hate = document.querySelector('.hate')
var love = document.querySelector('.love')
var body = document.querySelector('body')
var p = document.querySelector('p')
var show = document.querySelector('.show')
var screen = document.querySelector('.screen')
var show2 = document.querySelector('.show2')
var icon = document.querySelector('.icon')





hate.addEventListener('mouseenter', function(){
       hate.style.transform = `translateX(${random()}px) translateY(${random()}px)`
       show.classList.remove('hide')
})

function random(){
    var rnd = Math.random() * window.innerHeight
    return rnd
}


love.addEventListener('click', function(){
    var image = document.createElement('img')    
    screen.appendChild(image)
    image.src = "img.jfif"
    p.classList.add('hide')
    show.classList.add('hide')
    show2.classList.remove('hide')
    body.style.background = '#1d1d1d'
    hate.style.display = 'none'
    love.style.display = 'none'
})