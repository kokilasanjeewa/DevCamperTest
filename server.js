const http = require('http');
const todo = [
  {
    Id: 1,
    Name: 'kokila',
  },
  {
    Id: 1,
    Name: 'sanjeewa',
  },
];
const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  console.log(headers, url);
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powerd', 'Node');
  res.write('<h1>hello</h1>');
  res.end(
    JSON.stringify({
      success: true,
      data: todo,
      error: 'error on todo',
    }),
  );
});

const port = 5000;
server.listen(port, '127.0.0.1', () => {
  console.log(`Server running on port ${port}`);
});
