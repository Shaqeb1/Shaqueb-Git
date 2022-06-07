const{Engine, Render, Bodies, World, MouseConstraint} = Matter


const sectionTag = document.querySelector('section.shapes')

// create an engine
const engine = Engine.create();

// WIdth and Height of the page
const w = window.innerWidth
const h = window.innerHeight


// create a renderer
const renderer = Render.create({
    element: sectionTag,
    engine: engine,
    options: {
        height: h,
        width: w,
        background: '#000000',
        wireframes: false,
        pixelRatio: window.devicePixelRatio 
    }
});


// Creating Shapes
const createShape = (x,y) => {
    return Bodies.circle(x, y, 20 + 20 * Math.random(), {
        frictionAir: 0.1,
        render : {
            fillStyle: 'red'
        }
    })
}

const bigBall = Bodies.circle(w / 2, h / 2, 250, {
    isStatic: true,
    render : {
        fillStyle: '#ffffff'
    }
})


const wallOptions = {
    isStatic: true, 
    render:  {
        visible: false
    }
}

const ground = Bodies.rectangle(w/2, h + 50, w + 100, 100, wallOptions)
const ceiling = Bodies.rectangle(w/2, h - 50, w + 100, 100, wallOptions)
const leftWall = Bodies.rectangle(-50, h/2, 100 , h + 100, wallOptions)
const rightWall = Bodies.rectangle(w + 50, h/2, 100 , h + 100, wallOptions)


const mouseControl = MouseConstraint.create(engine, {
    element: sectionTag,
    constraint: {
        render: {
            visible: false
        }
    }
})



World.add(engine.world, [bigBall, ground, ceiling, leftWall, rightWall, mouseControl])

// click the page and add the shape
document.addEventListener('click', (event) => {
    const shape = createShape(event.pageX,event.pageY)
    World.add(engine.world, shape)
})



Engine.run(engine)
Render.run(renderer)


