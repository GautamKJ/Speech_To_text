const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <!-- <link rel="stylesheet" href="style.css"> -->
      <style>
          *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body{
      background-color: darkorange;
  }
  .container{
      margin-top: 5%;
      display: flex;
      /* align-items: center; */
      justify-content: center;
      height: 100vh;
  }
  .box{
      border: solid white 3px;
      width: 40%;
      height: 30vh;
      
  }
      </style>
      
  </head>
  <body>
          <div class="container">
              <div class="box">
                  <p class="word">Gautam</p>
              </div>
          </div>
          <script>
              console.log('speech recognisation')
  
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.onstart = function () {
      console.log("We are listening. Try speaking into the microphone.");
  };
  let p = document.createElement('p');
  const box = document.querySelector('.box');
  box.appendChild(p);
  
  recognition.addEventListener('result', e => {
      console.log(e);
      const transcript=Array.from(e.results)
      .map(result=>result[0])
      .map(result=>result.transcript)
      .join('');
      p.textContent=transcript;
      if(e.results[0].isFinal){
          p=document.createElement('p');
          box.appendChild(p);
      }
      console.log(" transcript-->",transcript);
  })
  recognition.addEventListener('end',recognition.start)
  recognition.start();
          </script>
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
