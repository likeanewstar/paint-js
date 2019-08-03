const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
};

function startPainting() {
    stopPainting();
};

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    // 해당 영역 내에서의 좌표값 : offsetX, Y
    // 전체 window 내에서의 좌표값 : clientX, Y
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};

function onMouseDown(e) {
    painting = true;
};

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}