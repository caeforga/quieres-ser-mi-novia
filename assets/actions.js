function actionSi() {
    document.getElementById("Back").classList.add('selected');
}

function actionNo() {
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = Math.random() * width;
    newHeight = Math.random() * height;

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";

}