var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio')

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('start');
	request('https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States', function (error, response, html) {
	  if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		$('body #content .wikitable td').each(function(element) {
			var a = $(this).prev();
			console.log(a.text());
		});
		res.render('index', { title: 'Express' });
	  }
	});
	
});

module.exports = router;
