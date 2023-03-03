const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
    res.end('Write')
}).listen(3000)