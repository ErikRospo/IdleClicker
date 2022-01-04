var canv = document.getElementById('DrawCanvas');
var ctx = canv.getContext("2d");
window.onload({
  startup(ctx);
});
function startup(ctx) {

};
function line(ctx,x1,y1,x2,y2) {
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
};
function circle(ctx,x1,y1,r) {
    ctx.beginPath();
    ctx.arc(x1,y1,r,0,2*Math.PI);
    ctx.stroke();
};
function drawText(ctx,x1,y1,text,font="Arial",fontSize="12pt") {
  ctx.font=fontSize+" "+font;
  ctx.fillText(text,x1,y1);
};
function strokeText(ctx,x1,y1,text,font="Arial",fontSize="12pt") {
  ctx.font=fontSize+" "+font;
  ctx.strokeText(text,x1,y1);
};
