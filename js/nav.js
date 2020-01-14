function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "navContainer") {
      x.className += " responsive";
    } else {
      x.className = "navContainer";
    }
  }