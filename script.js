var date = new Date();
var d = date.getHours();
var x = date.getMonth();
var y = date.getDate();

  if  (x == 11 ) {
document.getElementsByClassName('c')[0].className = "e";          // false - true
}
else if  ( x == 0 && y <= 6) {
document.getElementsByClassName('c')[0].className = "e";
}

else if  (  d >= 6 && d <= 11) {
document.getElementsByClassName('a')[0].className = "a";
}
else if  (  d >= 12 && d <= 18) {
document.getElementsByClassName('b')[0].className = "b";
}
else if  (  d >= 19 && d <= 22) {
document.getElementsByClassName('c')[0].className = "c";
}

else  {
document.getElementsByClassName('d')[0].className = "d";
}
