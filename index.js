const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200)
    res.end('Write')
}).listen(3000)