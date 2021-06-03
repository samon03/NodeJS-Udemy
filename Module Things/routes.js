
const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    const fs = require('fs');

    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/msg" method="POST"><input type="text" name="msg"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
    }
    
    else if(url === '/text')
    {
        res.write('<html>');
        res.write('<head><title>My Server</title></head>');
        res.write('<body><h1>Hello World!</h1></body>');
        res.write('</html>');
        res.end();
    }

    if(url === '/msg' && method == 'POST')
    {
        const body = [];
        req.on('data', (chunk) => {
           body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const msg = parsedBody.split('=')[1];
            fs.writeFile('message.txt', msg, error => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });           
        });
    }    
};

// module.exports = {
//     handler: requestHandler,
//     code: 'Some hard coded text here'
// };


exports.handler = requestHandler;
exports.code = 'Some hard coded text here';

