(function reaadyJS(win,doc){
    'use strict'

    let next = doc.querySelector("#next")
    let previus = doc.querySelector("#previus")
    let slidesPosition = 0

    function passSlide(event){
        let img = doc.querySelector("#img")
        const slides = [
            './img/tela-branca-300x181.webp',
            './img/chrono.jpg',
            './img/inuyasha.jpg',
            './img/tenjhotenge.jpg',
            './img/tenchi.jpg',
            './img/ippo.png',
            './img/yuyuhakusho.jpg'
        ];

        if (slidesPosition >= slides.length-1){ 
            slidesPosition = 0
        }
        else if (slidesPosition <= 0){
              slidesPosition =  slides.length-1
        };

        if  (event.target == next){
            slidesPosition++
        }
        else if  (event.target == previus){
            slidesPosition--
        };

       img.src = slides[slidesPosition]
    };

           

    next.addEventListener("click",passSlide,false);
    previus.addEventListener("click",passSlide,false);
    })(window,document);