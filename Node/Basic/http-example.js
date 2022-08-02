const {get} = require('http')

get('http://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk is ${chunk}`)
    })
    res.on('end', () => {
        console.log('No more data')
    })
})

req.end()
