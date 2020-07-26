const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res) {
  if(req.method === 'GET' && req.url === '/') {
    res.end('Hello World Welcome To WeJapa Internship');
  }
  if(req.method === 'POST' && req.url === '/') {
    let data = []
    req.on('data', chunk => {
      data.push(chunk)
      const name = JSON.parse(data).name
      res.end(`Hello ${name} Welcome To WeJapa Internship`)
    })
  }
  else {
    res.writeHead(404)
    res.end('file not found')
  }
})

server.listen(port, function(error) {
  if(error) {
    console.log('Something went wrong', error)
  } else {
    console.log('server listening on port ' + port)
  }
})