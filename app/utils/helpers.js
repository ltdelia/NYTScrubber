var axios = require('axios');

var helpers = {
	getArticlesByQuery: function(topic, start, end){
		var key = "8fe067cb1c434c4bab794b1c72a7e0db";
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?', {
			params: {
				'apikey': key,
				'q': topic,
				'begin_date': start,
				'end_date': end
			}
		})
		.then(function(results){
			console.log("Results from Axios: ", results.data.response.docs)
			return results.data.response.docs;
		})
	}
}

module.exports = helpers;