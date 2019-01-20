var express = require('express');
var router = express.Router();
var axios = require('axios');
// const $ = require('cheerio');
const cheerio = require('cheerio')

/* GET home page. */
router.get('/', function(req, res, next) {
	axios.get('https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States')
		.then(function (response) {
			// console.log(response);
			// console.log('dfv', $('.hatnote.navigation-not-searchable', response).length);
			// console.log($('big > a', response));
			const $ = cheerio.load(response);
			const temp = $('big > a');
			// console.log($('.mediawiki', response));
			// console.log($('big > a', response));
			console.log('temp-length: ', temp.length);
			console.log('temp: ', temp);
			
			res.render('index', { title: 'Express' });
  		})
  		.catch(function (error) {
			console.log(error);
		});
});

module.exports = router;
