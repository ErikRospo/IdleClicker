var canv = document.getElementById('DrawCanvas');
var ctx = canv.getContext("2d");
window.onLoad({
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
}
