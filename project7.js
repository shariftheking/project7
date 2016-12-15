var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

var drawing = false

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(xpos, ypos, size, color) {
  var newcircle = document.createElementNS(namespace, "rect")
 newcircle.setAttribute("x", xpos)
 newcircle.setAttribute("y", ypos)
 newcircle.setAttribute("width", size)
 newcircle.setAttribute("height", size)
 newcircle.setAttribute("fill", color)
 screen.appendChild(newcircle)
}

function drawcircle(xpos, ypos, size, color) {
  var newcircle = document.createElementNS(namespace, "circle")
 newcircle.setAttribute("cx", xpos)
 newcircle.setAttribute("cy", ypos)
 newcircle.setAttribute("fill", color)
 newcircle.setAttribute("r", size)
 screen.appendChild(newcircle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  drawing = true
})

document.addEventListener("mousemove", function(e) {
  if (drawing = true) {

    var pt = transformPoint(e)
    var shape = document.getElementById("shapeSelect").value
    var color = document.getElementById("colorSelect").value
    var size = document.getElementById("sizeSelect").value



    if (shape == "circle") {
      drawcircle(pt.x, pt.y, size, color)
    }
    else if (shape == "square") {
      drawSquare(pt.x, pt.y,size, color)
    }
}
})


document.addEventListener("mouseup", function(e) {
drawing = false
})
