const getUserMedia = require('getusermedia')
// const http = require('http')
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Home page");
//     } else if (req.url === "/slow-page") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Slow Page");
//     }
// });

// server.listen(8000, () => console.log("Server is running on port 8000"));

getUserMedia({ audio: true }, function (err, stream) {
    console.log(err, stream);
})