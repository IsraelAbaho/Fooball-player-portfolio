const navBar = document.getElementById('nav-Bar'),
toggleBtn = document.getElementById('toggleId');

toggleBtn.addEventListener('click',()=>{
    navBar.classList.toggle('show')
})

const nav = document.querySelectorAll('.navBar')
function takeAction(){
    navBar.classList.remove('show')
}
nav.forEach(n =>n.addEventListener('click',takeAction))


let swiper = new Swiper(".imgConatiner", {
    cssMode: true,
    loop: true,
    autoplay: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,
   
  });

let swiperVideo = new Swiper(".videoContainer", {
    cssMode: true,
    loop: true,
    

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    mausehold: true,
   
  });