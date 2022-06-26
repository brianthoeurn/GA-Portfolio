let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{




    setTimeout(()=>{

        logoSpan.forEach((span, index)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (index + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, index)=>{
                
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (index+ 1) * 50)
            })
        },2000);

            setTimeout(()=>{
                intro.style.top = '-100vh';
            }, 2300)

    })
})




  console.log('hello')
console.log('red')


/*Testing nav*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }