const cursor = document.querySelector('div.cursor')
const canvasIn = document.querySelector('canvas.in')
const canvasOut = document.querySelector('canvas.out')
let isMouseDown = false

// When i hold mouse down the cursor will grow bigger
const growCursor = () => {
    cursor.classList.add('is-down')
    
}

// Shrink cursor on click
const shrinkCursor = () => {
    cursor.classList.remove('is-down')
    
}

// Move cursor based on coordinates
const moveCursor = (x, y) => {
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`

}

// Canvas Setup
const setupCanvas = (canvas) => {
    const bodyTag = document.querySelector('body')
    const w = window.innerWidth
    const h = bodyTag.offsetHeight
    const dpi = window.devicePixelRatio
    
    canvas.width = w * dpi
    canvas.height = h * dpi
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`

    // 2D canvas
    const context = canvas.getContext("2d")
    context.scale(dpi, dpi)

    if (canvas.classList.contains('in')) {
        context.fillStyle = '#000000'
        context.strokeStyle = '#ffffff'
    } else {
        context.fillStyle = '#ffffff'
        context.strokeStyle = '#000000'
    }
    
    context.lineWidth = 80
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.shadowBlur = 80
    context.shadowColor = context.strokeStyle

    context.rect(0,0, w, h)
    context.fill()



    
}

// Draw start based on canvas
const startToDraw = (canvas, x, y) => {
    const context = canvas.getContext('2d')
   
    context.moveTo(x,y)
    context.beginPath()
}

// Draw based on Canvas, x and y

const moveDraw = (canvas, x, y) => {
    const context = canvas.getContext('2d')
    if (isMouseDown) {
        context.lineTo(x, y)
        context.stroke()  
    }
    
}


setupCanvas(canvasIn)
setupCanvas(canvasOut)

// Event Listeners
document.addEventListener('mousedown', (event) => {
    isMouseDown = true
    growCursor()
    startToDraw(canvasIn, event.pageX, event.pageY)
    startToDraw(canvasOut, event.pageX, event.pageY)
})

document.addEventListener('mouseup', () => {
    isMouseDown = false
    shrinkCursor()
})

document.addEventListener('mousemove', (event) => {
    moveCursor(event.pageX, event.pageY)
    moveDraw(canvasIn, event.pageX, event.pageY)
    moveDraw(canvasOut, event.pageX, event.pageY)
})

window.addEventListener('resize', () => {
    setupCanvas(canvasIn)
    setupCanvas(canvasOut)
})