/*const http = require('http');


const server = http.createServer((req,res)=>{
      console.log(req)
      console.log(res)
      if (req.method === 'GET' && req.url === '/'){
        console.log("Hello from Yashpal.")
        res.end()
      }
});

server.listen(3001, () => {
    console.log('server on http://localhost:3001')
});*/
const app = require('./server')

app.listen(3001, () => {
  console.log('hello on http://localhost:3001')
})