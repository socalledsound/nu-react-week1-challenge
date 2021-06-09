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

// create a function called makeCirclesArray that uses Array.from to return an array of circles!
// you'll use the functions above, and Array.from to create the array of circles.
// i'll get you started: 
// const makeCirclesArray = (num, minCircleR, maxCircleR, padding ) => {
//        const circles = Array.from({ length: num}, () => {
//              //call makeCircle here!
//      })
//  return circles
//}
const circles = makeCirclesArray(numCircles, minCircleSize, maxCircleSize, padding)
console.log(circles)


