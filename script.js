const burger = document.querySelector('.burger')
const logo = document.querySelector('.logo')

burger.addEventListener('click', () => {
    nav.classList.toggle('active')
})

const swiperAlbum1 = new Swiper('.swiper-album-1', {
    loop: true,
    slidesPerView: 0.3,
    spaceBetween:10,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
        breakpoints: {
            500: {
              slidesPerView: 0.4,
            },
            700: {
              slidesPerView: 0.5,
            },
            900: {
              slidesPerView:0.6,
              
            },
          },
    


    allowTouchMove: false,

    speed: 20000,
});


const swiperAlbum2 = new Swiper('.swiper-album-2', {
    loop: true,
    slidesPerView: 0.3,
    spaceBetween:10,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    },
    breakpoints: {
        500: {
          slidesPerView: 0.4,
        },
        700: {
          slidesPerView: 0.5,
        },
        900: {
          slidesPerView:0.6,
          
        },
      },


    allowTouchMove: false,

    speed: 20000
});
