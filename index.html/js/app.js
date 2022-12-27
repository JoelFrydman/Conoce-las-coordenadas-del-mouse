let IE = document?true:false;
if (!IE) document.addEventListene(Event.MOUSEMOVE)
document.onmousemove = getMouseXY;
let tempX = 0;
let tempY = 0;

function getMouseXY(e) {
if (IE) {tempX = event.clientX + document.body.scrollLeft;
tempY = event.clientY + document.body.scrollTop;}
else {tempX = e.pageX;tempY = e.pageY;}  
if (tempX < 0){tempX = 0;}
if (tempY < 0){tempY = 0;}  
document.Show.MouseX.value = tempX;
document.Show.MouseY.value = tempY;
return true;}
