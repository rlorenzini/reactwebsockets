const WebSocket = require('ws');
// to use, run nodemon server.js or node server.js in terminal
// expected: starting 'node server.js'

const wss = new WebSocket.Server({ port: 3030 });

// when connected and a message comes through, update all who are connected
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
