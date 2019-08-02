var imgObject = null;
imgObject = document.getElementById("miuimage");
function init() {
    imgObject = document.getElementById("miuimage");
    imgObject.style.position = 'relative';
    imgObject.style.left = '0px';
    
}
function moveRight(){
    imgObject.style.left = parseInt(imgObject.style.left) + 10  + 'px';
}
window.onload = init;