var canv = document.getElementById('DrawCanvas');
var ctx = canv.getContext("2d");
window.onload({
  startup();
});
function startup() {

};
function line(x1,y1,x2,y2) {
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
};
function circle(x1,y1,r) {
    ctx.beginPath();
    ctx.arc(x1,y1,r,0,2*Math.PI);
    ctx.stroke();
};
function drawText(x1,y1,text,font="Arial",fontSize="12pt") {
  ctx.font=fontSize+" "+font;
  ctx.fillText(text,x1,y1);
};
function strokeText(x1,y1,text,font="Arial",fontSize="12pt") {
  ctx.font=fontSize+" "+font;
  ctx.strokeText(text,x1,y1);
};
function ImgDraw(img,x,y) {
  
}
