const http = require("http")
const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    })
    res.end(
      JSON.stringify({
        id: 1,
        name: "Sir Jon Snow",
      })
    )
  } else if (req.url === "/messages") {
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`Listing on PORT ${PORT}`)
})
