let data = ["programming", "internship", "tutoring", "delivery", "community work", "local work", "assistant", "babysitting", "web development", "fast food"]

for (let k = 0; k < data.length; k++) {
  let newli = document.createElement('li');
  newli.style.display = "none";
  newli.innerHTML += '<li><a href="">' + data[k] + '</a></li>';
  document.querySelector("#myUL").prepend(newli);
}


  function myFunction() {
      let inputUser = document.querySelector("#myInput")
      if (inputUser.value.length == 0) {
        document.querySelector("#myUL").style.display = "none";
      } else{
        document.querySelector("#myUL").style.display = "block";
      }

      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
//use the DOM to add this to the HTML and make a JSON with the specific jobs, pay, age range, url, and description
let myJson = {
	"results": [{
		"jobname": "McDonalds",
		"jobphoto": "https://www.thesun.co.uk/wp-content/uploads/2017/02/nintchdbpict000177708607.jpg",
		"description": "McDonalds work and stuff.",
		"location": "Varies",
		"pay": "13.50 per hour",
		"age": "16+"
	},{
		"jobname": "Wendy's",
		"jobphoto": "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Wendy%27s_logo_2012.svg/1200px-Wendy%27s_logo_2012.svg.png",
		"description": "Wendy work and stuff.",
		"location": "Varies",
		"pay": "13.50 per hour",
		"age": "16+"
	},{
		"jobname": "Chipotle",
		"jobphoto": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1200px-Chipotle_Mexican_Grill_logo.svg.png",
		"description": "You get free burritos and u sell them too.",
		"location": "Varies",
		"pay": "15.00 per hour",
    "age": "16+"
  },{
		"jobname": "Red Lobster",
		"jobphoto": "http://gcgalore.com/wp-content/uploads/2019/01/Red-Lobster-Gift-Card.jpg",
		"description": "You get free fish and u sell them too.",
		"location": "Varies",
		"pay": "15.00 per hour",
    "age": "16+"
  },{
		"jobname": "Nike",
		"jobphoto": "https://www.businessinsider.com/image/53d29d5c6bb3f7a80617ada8-1200-924/nike-logo.png",
		"description": "If your shoes leanin, get Nike.",
		"location": "Varies",
		"pay": "15.00 per hour",
    "age": "16+"
  },{
		"jobname": "Adidas",
		"jobphoto": "https://i.guim.co.uk/img/media/cd3b716f288319f11f00f7f98b12c7620106da47/0_25_3500_2100/master/3500.jpg?width=300&quality=85&auto=format&fit=max&s=ed278f233788f80501f8ef828f81a648",
		"description": "Seasonal P/T Retail Store Associate - .",
		"location": "New York SP 6508 2019",
		"pay": "15.00 per hour",
    "age": "16+"
  },{
		"jobname": "Barnes and Noble",
		"jobphoto": "https://simg1.imagesbn.com/pimages/store/photo/s2/2337.jpg",
		"description": "Read books or lose braincells.",
		"location": "Varies",
		"pay": "15.00 per hour",
    "age": "16+"
  },{
		"jobname": "Eleven Seven",
		"jobphoto": "data:image/jpeg;base64,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",
		"description": "Bootleg Seven Eleven",
		"location": "Varies",
		"pay": "11.07 per hour",
    "age": "11 or 7 year olds"
    
	}]
};


for (let i = 0; i < myJson.results.length; i++) {
  let newJobbox = document.createElement('div');
  newJobbox.innerHTML += '<div class="jobbox"><p class="jobname">' + myJson.results[i].jobname + '</p><img src="' + myJson.results[i].jobphoto + '" alt="" class="jobphoto"><p class="description">' + "<b>Description: </b>" + myJson.results[i].description +   '</p><p class="location">' + "<b>Location: </b>" + myJson.results[i].location + '</p><p class="pay">' + "<b>Pay: </b>" + myJson.results[i].pay + '</p><p class="age">' + "<b>Age Range: </b>" + myJson.results[i].age +  '</p></div>';
  document.querySelector(".joblist").prepend(newJobbox  
,);
}
