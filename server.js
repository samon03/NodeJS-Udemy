const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    const method = req.method;

    const fs = require('fs');

    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/msg" method="POST"><input type="text" name="msg"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/text')
    {
        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body><h1>Hello World!</h1></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/msg' && method == 'POST')
    {
        const body = [];
        req.on('data', (chunk) => {
           console.log(chunk);
           body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const msg = parsedBody.split('=')[1];
            fs.writeFile('message.txt', msg, error => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });           
        });
    }    
});

server.listen(3000);