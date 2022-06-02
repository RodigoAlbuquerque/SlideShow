const nxt = document.getElementById('next')
const prev = document.getElementById('previus')
let px= 0;
const  imgs = [
{'url':'./imgs/chrono.jpg', 'id':'1'},
{'url':'./imgs/inuyasha.jpg', 'id':'2'},
{'url':'./imgs/tenjhotenge.jpg','id':'3'},
{'url':'./imgs/tenchi.jpg','id':'4'},
{'url':'./imgs/ippo.png','id':'5'},
{'url':'./imgs/yuyuhakusho.jpg','id':'6'}
]

const loadImages = (url,id) =>{
    const imgContainer = document.querySelector('.slides')
    const slide = document.createElement('img')
    slide.classList.add('imagens')
    slide.setAttribute('id', id)
    slide.src = url
    imgContainer.appendChild(slide)

}
imgs.forEach((slide) => loadImages(slide.url,slide.id))

const changeImage = (event) =>{
    if (px > 0){
        px = -4000
    }else if (px < -4000){
        px = 0
    }else if (event.target.id == 'next'){
        px -= 800
        console.log(px)
    }else if (event.target.id == 'previus'){
        px +=  800
        console.log(px)
    } 
    document.getElementById('1').style.left = px + 'px'
    document.getElementById('2').style.left = px + 'px'
    document.getElementById('3').style.left = px + 'px'
    document.getElementById('4').style.left = px + 'px'
    document.getElementById('5').style.left = px + 'px'
    document.getElementById('6').style.left = px + 'px'

}
nxt.addEventListener('click',changeImage)
prev.addEventListener('click',changeImage)
 