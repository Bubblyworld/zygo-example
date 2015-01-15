var Zygo = require('zygo-server');
var zygo = new Zygo('zygo.json');

zygo.initialise().then(function() {
  zygo.createServer().listen(8080);
}).catch(function(error) {
  console.log(error.stack);
});
