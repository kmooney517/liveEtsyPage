(function () {

	//specify a url
	  let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=starwars&includes=Images,Shop';

	//make api request with getJSON on the url specified
		$.ajax({
			url: etsyURL,
			dataType: 'jsonp',
			method: 'get',
		})
			//all information is in a box from the website at this point
			.then (function (etsy){

				//pass data through a function looking for the text in itemtemplate(found in the html) and then adds the text to the template
		  		var templateString= $('#itemTemplate').text();
	  	  		var templateFunction = _.template(templateString);

	  	  		//for each of the peices of info passed through - append the template to a div called tiles in the html
	   	  		_.each(etsy.results, function(item){
	      			var itemHTML = templateFunction(item);
	      			$('.tiles').append(itemHTML);
				});
  			});
}());

