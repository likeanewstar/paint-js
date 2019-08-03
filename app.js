const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');

const colorArray = Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));
// Array.from : 유사배열 객체 또는 반복 가능한 객체(iterable object)를 복사해 배열로 생성
// arrow function 안에 사용된 'color'라는 변수는 각각의 배열 요소를 가리키는 역할을 하는 변수일뿐이라 다른 어떤 이름을 넣어도 상관 없다. 

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function handleColorClick(e) {
    const changeColor = e.target.style.backgroundColor;
    ctx.strokeStyle = changeColor;
};

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

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}