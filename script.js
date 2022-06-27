// SIDE NAVIGATION
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }











// LOGO TRANSITION
const intro = document.querySelector('.intro');
const logoBtn = document.querySelector('.welcomeLogo');
const myName = document.querySelector('#myname')

const overLay = function () {
    logoBtn.classList.add('fade');
    setTimeout(()=>{
        intro.style.top = '-100vh';
    },500)
    setTimeout(()=>{
      myName.classList.remove('hide')
    }, 1100)
}

logoBtn.addEventListener('click', overLay)