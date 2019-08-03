const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting() {
    painting = false;
};

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    // 해당 영역 내에서의 좌표값 : offsetX, Y
    // 전체 window 내에서의 좌표값 : clientX, Y
};

function onMouseDown(e) {
    painting = true;
};

function onMouseUp(e) {
    painting = false;
};

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', stopPainting);
}