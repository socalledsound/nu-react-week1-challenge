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

const makeCirclesArray = (num, minR, maxR, pad) => {
    const circles = Array.from({ length : num}, () => {
        const color = getRandomColor()
        const x = getRandomVal(pad, window.innerWidth - pad - maxR)
        const y = getRandomVal(pad, window.innerHeight - pad - maxR)
        const size = getRandomVal(minR, maxR)
        const circle = makeCircle(x, y, color, size)
        return circle
    })
    return circles
}
const root = document.getElementById('root')
const numCircles = 100;
const padding = 200;
const minCircleSize = 10;
const maxCircleSize = 100;

const circles = makeCirclesArray(numCircles, minCircleSize, maxCircleSize, padding)
console.log(circles)

circles.map( item => root.appendChild(item))
