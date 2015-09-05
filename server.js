// IMPORTS
var $connect = require('connect');
var $serveStatic = require('serve-static');
var $readline = require('readline');
var $open = require('open');

// INSTANCES
var rl = $readline.createInterface({input: process.stdin,output: process.stdout});

rl.question("Which port you want the server runs?", function(answer) {
	$connect().use($serveStatic(__dirname)).listen(answer);
	$open('http://localhost:' + answer);
	console.info('Server work in http://%s:%s :' + answer);
  rl.close();
});