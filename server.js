const http = require("http");
const { url } = require("inspector");
const server = http.createServer((req, res) =>{
    res.write('This is coming from NodeJS server... ');
   
    if(req.url =='/first')
    return res.end('This is first response');

    res.end('This is default response');
});
server.listen(3200, (req, res) =>{
    console.log("Server is listening at port 3200");
});