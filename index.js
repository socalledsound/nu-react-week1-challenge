const getRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, "0")}`
const getRandomVal = (min, max) => `${min + Math.random() * (max - min)}px`

const makeCircle = (x, y, color, size) => {
    const circle = document.createElement('div')
    circle.style.height = size
    circle.style.width = size
    circle.style.borderRadius = size
    circle.style.position = 'absolute'
    circle.style.left = x
    circle.style.top = y
    circle.style.backgroundColor = color
    return circle
}


const root = document.getElementById('root')
const numCircles = 100;
const padding = 200;
const minCircleSize = 10;
const maxCircleSize = 100;



