function esPar(num) { return num % 2;}
const fecha = new Date(Date.now());
console.log(esPar(fecha.getDay()));
lics = document.getElementById('lics');
if (esPar(fecha.getDay())==0){
    lics.style.flexDirection = 'column';
}
else{
    lics.style.flexDirection = 'column-reverse';
}
