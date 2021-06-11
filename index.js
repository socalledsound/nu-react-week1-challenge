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
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Array.from is awesome, you can pass in a config object which optionally takes a length value
// and then a function to generate each item in an array.
// i'll get you started: 
// const makeCirclesArray = (num, minCircleR, maxCircleR, padding ) => {
//        const circles = Array.from({ length: num}, () => {
                // use the functions above to generate a color and position and size    
//              //then call makeCircle with those values here!
//      })
//  return circles
//}
const circles = makeCirclesArray(numCircles, minCircleSize, maxCircleSize, padding)
console.log(circles)


