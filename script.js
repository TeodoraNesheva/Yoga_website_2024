let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa fa-times');
    navbar.classList.toggle('active');
}


window.onscroll =() =>{
    menu.classList.remove('fa fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }
}
    window.onload =() =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
    
    }
    }
    var swiper = new Swiper(".home-slider", {
        spaceBetween: 20,
        effect: "fade",
        grabCursor: true,
        loop:true,
        centeredSlides: true,
        autoplay: {
            delay:5500,
            disableOnInteraction: false,
        }
        });



        var swiper = new Swiper(".feature-slider", {
            spaceBetween: 20,
            grabCursor: true,
            loop:true,
            centeredSlides: true,
            autoplay: {
                delay:5500,
                disableOnInteraction: false,
            },

            breakpoints:{
                0:{
                    sliderPerView: 1,
                }
            768:{
                    sliderPerView: 1,
                }

                991:{
                    sliderPerView: 1,
                }
            }
            });



          //  for trainer section

          var swiper = new Swiper(".trainer-slider", {
            spaceBetween: 20,
            grabCursor: true,
            loop:true,
            centeredSlides: true,
            autoplay: {
                delay:5500,
                disableOnInteraction: false,
            },

            breakpoints:{
                0:{
                    sliderPerView: 1,
                }
            768:{
                    sliderPerView: 1,
                }

                991:{
                    sliderPerView: 1,
                }
            }
            });
          

