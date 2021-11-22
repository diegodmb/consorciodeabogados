sal();

// Animanción Nav Responsive  
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const links = document.querySelectorAll('menu .links')

burger.addEventListener("click", () => {
    menu.classList.toggle("open");
    links.forEach(link => {
    link.classList.toggle("fade");
    });
  });



var prevScrollPos = window.pageYOffset;
window.onscroll = function() {

    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos){
        document.getElementById('nav').style.top = '0';
    }
    else{
        document.getElementById('nav').style.top = '-100px';
    }
prevScrollPos = currentScrollPos;
}

function esPar(num) { return num % 2;}
const fecha = new Date(Date.now());
console.log(esPar(fecha.getDay()));
tel = document.getElementById('tel');
if (esPar(fecha.getDay())==0){
    tel.innerHTML = '998 139 8267';
}
else{
    tel.innerHTML = '998 865 5093';
}

//let height;
//var main = document.querySelector('main');
//function setHeight() {
//    height = main.clientHeight - 1000;
//    console.log(height)
//    document.body.style.height = height + "px";
//  }

//let options = {
//    root: document.querySelector('body'),
//    rootMargin: '0px',
//    threshold: 1.0
//  }
  
//  let observer = new IntersectionObserver(callback, options);
//  let target = document.getElementById('footer');
//    observer.observe(target);


