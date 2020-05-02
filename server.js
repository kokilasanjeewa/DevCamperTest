//https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/

//version two session node learning
const http = require('http');
const os = require('os');

const todo = [{
    Id: 1,
    Name: 'kokila',
  },
  {
    Id: 1,
    Name: 'sanjeewa',
  },
];
const server = http.createServer((req, res) => {
  const {
    headers,
    url,
    method
  } = req;

  // headers request  capture
  console.log(req.headers.authorization);
  // body request capture
  let body = [];
  req.on('data', (chank) => {
    body.push(chank);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(body);

    res.writeHead(200, {
      'Content-Type': 'application/json',
      'X-Powerd': 'Node',
    });
    res.end(
      JSON.stringify({
        success: true,
        data: todo,
        error: 'error on todo',
      }),
    );
  });

});
const port = 5000;
server.listen(port, '127.0.0.1', () => {
  console.log(`Server running on port ${port}`);
});
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// 1.xx information 2.xx 200 success 201 created 202 no content 4.xx 400 bad 401 unauthorize 403 Forbidden 404 not found 500 Internal Server Error 501 Not Implemented 302 Found 300 Multiple Choice 301 Moved Permanently 304 Not Modified