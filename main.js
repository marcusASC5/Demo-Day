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
		"jobname": "Red Lobster",
		"jobphoto": "http://gcgalore.com/wp-content/uploads/2019/01/Red-Lobster-Gift-Card.jpg",
		"description": "You get free fish and u sell them too.",
		"location": "Varies",
		"pay": "15.00 per hour",
    "age": "16+"
    
	}]
};


for (let i = 0; i < myJson.results.length; i++) {
  let newJobbox = document.createElement('div');
  newJobbox.innerHTML += '<div class="jobbox"><p class="jobname">' + myJson.results[i].jobname + '</p><img src="' + myJson.results[i].jobphoto + '" alt="" class="jobphoto"><p class="description">' + "<b>Description: </b>" + myJson.results[i].description +   '</p><p class="location">' + "<b>Location: </b>" + myJson.results[i].location + '</p><br /><p class="pay">' + "<b>Pay: </b>" + myJson.results[i].pay + '</p><p class="age">' + "<b>Age Range: </b>" + myJson.results[i].age +  '</p></div>';
  document.querySelector(".joblist").prepend(newJobbox  
,);
}
