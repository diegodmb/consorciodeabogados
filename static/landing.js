
var promo = document.getElementById('promo')
var pos = promo.getBoundingClientRect()
console.log(pos.top)
//Scrolling Landing

window.addEventListener('scroll', () => {
  console.log(pos.top)
  var value = window.scrollY;
  console.log(value)
  //promo.style.top =  60 + value / 3 * 0.2 + 'vh';
  promo.style.top =  60 + value / 3 * 0.2;
  promo.style.opacity = 1 - value * 0.001;
});
