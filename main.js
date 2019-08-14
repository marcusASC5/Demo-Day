let data = ["programming", "internship", "tutoring", "delivery", "community work", "local work", "assistant", "babysitting", "web development", "fast food"]

//use the DOM to add this to the HTML and make a JSON with the specific jobs, pay, age range, url, and description
let myJson = {
	"results": [{
		"jobname": "Local Job#1",
		// "jobphoto": "https://www.thesun.co.uk/wp-content/uploads/2017/02/nintchdbpict000177708607.jpg",
		"description": "",
		"location": " (.1 mile(s) away)",
		"pay": "$15 per hour",
		"age": "16+"
	},{
		"jobname": "Local Job#2",
		// "jobphoto": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Wendy%27s_logo_2012.svg/1200px-Wendy%27s_logo_2012.svg.png",
		"description": "",
		"location": " (.1 mile(s) away)",
		"pay": "$15 per hour",
		"age": "16+"
	},{
		"jobname": "Local Job#3",
		// "jobphoto": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png",
		"description": "",
		"location": " (.1 mile(s) away)",
		"pay": "$15 per hour",
    "age": "16+"
  },{
		"jobname": "Local Job#4",
		// "jobphoto": "http://gcgalore.com/wp-content/uploads/2019/01/Red-Lobster-Gift-Card.jpg",
		"description": "",
		"location": " (.1 mile(s) away)",
		"pay": "$15 per hour",
    "age": "16+"
  
	}]
};


for (let i = 0; i < myJson.results.length; i++) {
  let newJobbox = document.createElement('div');
  newJobbox.innerHTML += '<div class="jobbox"><p class="jobname">' + myJson.results[i].jobname + '</p><img src="' + myJson.results[i].jobphoto + '" alt="" class="jobphoto"><p class="description">' + "<b>Description: </b>" + myJson.results[i].description +   '</p><p class="location">' + "<b>Location: </b>" + myJson.results[i].location + '</p><p class="pay">' + "<b>Pay: </b>" + myJson.results[i].pay + '</p><p class="age">' + "<b>Age Range: </b>" + myJson.results[i].age +  '</p></div>';
  document.querySelector(".joblist").prepend(newJobbox  
,);
}
