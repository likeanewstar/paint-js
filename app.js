const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

// options
const initialColor = '#2c2c2c';
const canvasSize = 700;

canvas.width = canvasSize;
canvas.height = canvasSize;

ctx.strokeStyle = initialColor;
ctx.fillStyle = initialColor;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
};

function startPainting() {
    painting = true;
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

function handleColorClick(e) {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
};

function handleRangeChange(e) {
    const size = e.target.value;
    ctx.lineWidth = size;
};

function handleModeClick() {
    if (filling === false) { // fill mode
        filling = true;
        mode.innerText = 'Paint';
    } else { // paint mode
        filling = false;
        mode.innerText = 'Fill';
    }
};

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, canvasSize, canvasSize);
    }
};

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
}

const colorArray = Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));
// Array.from : 유사배열 객체 또는 반복 가능한 객체(iterable object)를 복사해 배열로 생성
// arrow function 안에 사용된 'color'라는 변수는 각각의 배열 요소를 가리키는 역할을 하는 변수일뿐이라 다른 어떤 이름을 넣어도 상관 없다. 

if(range) {
    range.addEventListener('change', handleRangeChange);
    // 강의에서 니꼴라스는 change 대신 input을 사용
}

if(mode) {
    mode.addEventListener('click', handleModeClick);
}