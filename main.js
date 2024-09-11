

let colors = ["lightblue" , "purple" , "lightgreen" , "pink"]
let randomColor = Math.floor(Math.random() * colors.length)
// console.log(colors[randomColor] ) 


let heights = ["10vh" , "20vh" , "30vh" , "40vh"]

let randomHeight = Math.floor(Math.random() * heights.length)
// console.log(heights[randomHeight])


let widths = ["10vw" , "20vw" , "30vw" , "40vw"]
let randomWidth = Math.floor(Math.random() * widths.length)
// console.log(widths[randomWidth])

let positions = ["top" , "center", "left" , "bottom" , "right"]
// let positions = ["10" , "20", "30" , "40" , "50"]

let randomPosition = Math.floor(Math.random() * positions.length)
// console.log(positions[randomPosition])

let cube = document.getElementById("cube")

function randomStyle() {
    cube.style.backgroundColor= colors[randomColor]
    cube.style.width = widths[randomWidth]
    cube.style.height = heights[randomHeight]
    cube.style.float = positions[randomPosition] // check it 
    }

    setInterval(randomStyle, 1000);


       // setInterval(function() {
    //     cube.style.backgroundColor= colors[randomColor]
    //     cube.style.width = widths[randomWidth]
    //     cube.style.height = heights[randomHeight]
    //     cube.style.left = positions[randomPosition] // check it 
    //     }, 1000);


    // cube.style.display = "flex"
    // cube.style.alignItems = positions[randomPosition] // check it 