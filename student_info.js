var http = require("http");
var url = require("url");

var DATA = [
  { id: 11111, name: "Bruce Lee", score: 84 },
  { id: 22222, name: "Jackie Chan", score: 93 },
  { id: 33333, name: "Jet Li", score: 88 },
];

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var studentId = parsedUrl.query.student_id;
  var result;

  if (/^\/api\/score/.test(req.url)) {
    DATA.forEach((item) => {
      if (item.id == studentId) {
        result = item;
      }
    });
  }

  if (result) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(8080);
