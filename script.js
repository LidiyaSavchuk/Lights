var element=document.getElementById('green');
var element1=document.getElementById('red');
var element2=document.getElementById('yellow');
turnRed();

function turnGreen() {
element1.classList.add('hidden');
element2.classList.add('hidden');
element.classList.remove('hidden');
element.classList.add('light');
setTimeout(turnRed,4000);
}
function turnRed() {
element.classList.add('hidden');
element1.classList.remove('hidden');
element1.classList.add('light');
setTimeout(turnRedYellow,3000);
}
/*function turnYellow() {
element.classList.add('hidden');
element1.classList.add('hidden');
element2.classList.remove('hidden');
element2.classList.add('light');
setTimeout(turnRed,3000);
}*/
function turnRedYellow() {
element.classList.add('hidden');
element1.classList.remove('hidden');
element2.classList.remove('hidden');
element1.classList.add('light');
setTimeout(turnGreen,800);
}