var axios = require('axios');

var helpers = {
	getArticlesByQuery: function(topic, start, end){
	var key = "8fe067cb1c434c4bab794b1c72a7e0db";
	start += "0101";
	end += "0101";
	return axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=' + key + '&q=' + topic + '&begin_date=' + start + '&end_date=' + end + '&sort=newest')
		.then(function(response){
			return {
				results: response
			}
		})
	}
}

module.exports = helpers;