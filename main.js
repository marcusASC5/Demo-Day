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
<div class="jobbox">
  <p class="jobname">
    
  </p>
  <img src="#" alt="" class="jobphoto">
  <p class="description">
    
  </p>
  <p class="location">
    
  </p>
  <p class="pay">
    
  </p>
  <p class="age">
  
    </p>
  
  </div>
  