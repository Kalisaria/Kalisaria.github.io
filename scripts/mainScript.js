
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


(function(exports) {
	exports.githubStars = function (repo, callback) {
		var xmlhttp = new XMLHttpRequest(),
			url = ["https://api.github.com"],
			useCallback = (typeof(callback) == "function");

		//count the stars
		function countStars(response) {
			//don't care, just make it an array
			if (!(response instanceof Array)) {
				response = [response];
			}
			//start the count
			var stars = 0;
            
            document.getElementById("star").innerHTML = stars;

			for (var i in response) {
				stars += parseInt(response[i].stargazers_count);
			}

			return stars;
		}

		//determine if we're looking at a collection or a single repo
		repo = repo.split("/");

		if (repo.length === 1) {
			url.push("users", repo[0], "repos");
		} else {
			url.push("repos", repo[0], repo[1]);
		}

		//check if we were given a callback, if so we set that up
		if (useCallback) {
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					callback(countStars(JSON.parse(xmlhttp.responseText)));
				}
			}
		}

		xmlhttp.open("GET", url.join("/"), useCallback);
		//set the github media header
		xmlhttp.setRequestHeader("Accept", "application/vnd.github.v3+json");
		xmlhttp.send();

		if (!useCallback) {
			//no callback, just wait for the response
			return countStars(JSON.parse(xmlhttp.responseText));
		}
	}
})(typeof exports !== 'undefined' ? exports : window);

githubStars("raular4322/raular4322.github.io", function(stars) {
	console.log("Stars: " + stars);
});

xhr.open("GET", "/index.html");
xhr.responseType = "document";
xhr.send();

var el = document.createElement( 'html' );
el.innerHTML = "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";

el.getElementsByTagName( 'a' );

xhr.open("GET", "/index.html");
xhr.responseType = "document";
xhr.send();

var el = document.createElement( 'html' );
el.innerHTML = "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";

el.getElementsByTagName( 'a' );
