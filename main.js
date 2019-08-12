  let num = 10;
    fetch('https://randomuser.me/api?results=' + num)
      .then(function(response) {
      return response.json();
  })
      .then(function(myJson) {
          for (let k = 0; k < myJson.results.length; k++) {
              let newli = document.createElement('li');
              newli.style.display = "none";
              newli.innerHTML += '<li><a href="#">' + myJson.results[k].name.first +  " "  + myJson.results[k].name.last + '</a></li>';
              document.querySelector("#myUL").prepend(newli);
      }
  });


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