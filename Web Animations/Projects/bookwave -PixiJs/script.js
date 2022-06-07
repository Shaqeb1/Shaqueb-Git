// Loop over each section and replace image with a canvas

const sections = document.querySelectorAll('section')

sections.forEach(section => {
    const originalImage = section.querySelector('img')
    const originalImageSource = originalImage.getAttribute('src')

    section.innerHTML = ''

    // SettingUp a pixi application

    const app = new PIXI.Application({
        width: 1100,
        height: 800,
        transparent: true
    })

    // Adding pixi to section

    section.appendChild(app.view)

    // New image
    let image = null
    let displacementImage = null

    // New Loader

    const loader = new PIXI.loaders.Loader()

    // Loading Image
    loader.add('image', originalImageSource)
    loader.add('displacement', '/assets/displacement2.jpg')
    loader.load((loader, resources) => {
        image = new PIXI.Sprite(resources.image.texture)
        displacementImage = new PIXI.Sprite(resources.displacement.texture)
        image.x = 100 + 450
        image.y = 100 + 300
        image.width = 900
        image.height = 600
        image.interactive = true

        image.anchor.x = 0.5
        image.anchor.y = 0.5

        image.filters = [
            new PIXI.filters.DisplacementFilter(displacementImage, 100)
        ]

        app.stage.addChild(image)

        // add some rotation on each frame
        // app.ticker.add(() => {
        //     image.rotation = image.rotation + 0.01
        // })
    })
})