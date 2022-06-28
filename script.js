//Contact me submit button
const submitUser = document.querySelector('.clickMe');

const newAlert = function (){
  alert('Thank you for getting in touch with me! I will respond as soon as possible :)')
}

submitUser.addEventListener('click', newAlert)

// SIDE NAVIGATION
const closeBtn = document.querySelector('#closeBtn')
const openBtn = document.querySelector('#openBtn')

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

closeBtn.addEventListener('click', closeNav)
openBtn.addEventListener('click', openNav)

// LOGO TRANSITION
const intro = document.querySelector('.intro');
const logoBtn = document.querySelector('.welcomeLogo');
const myName = document.querySelector('#myname')

const overLay = function () {
    logoBtn.classList.add('fade');
    setTimeout(()=>{
        intro.style.top = '-150vh';
    },500)
    setTimeout(()=>{
      myName.classList.add('reveal')
    }, 1050)
}

logoBtn.addEventListener('click', overLay)
