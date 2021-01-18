//Menu
const [btnOpen, btnClose] = document.querySelectorAll('.toggle-menu');
const menuEl = document.querySelector('.menu');

const switchMenu = function () {
  menuEl.classList.toggle('menu--open')
  //document.body.classList.toggle('hide-scroll');
  document.documentElement.classList.toggle('nav-open');
}

btnOpen.addEventListener('click', switchMenu);
btnClose.addEventListener('click', switchMenu);


//Slider
  new Splide( '.splide', {
    rewind: true,
    'arrowPath': `M8 1L16 9M16 9L8 17M16 9H0" stroke="white`,
    width: '49%',
    fixedWidth: '100%',
    breakpoints: {
      1800: {
        width: '47%',
      },
      768: {
        width: '354px',
      },
      767: {
        width: '100%',
        arrows: false,
      },
    }
  } ).mount();
