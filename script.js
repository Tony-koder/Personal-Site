function toggleLightMode() {
    var app = document.getElementsByTagName('BODY')[0];
    if (localStorage.lightMode == 'dark') {
        localStorage.lightMode = 'light';
        app.setAttribute('light-mode', 'light');
    } else {
        localStorage.lightMode = 'dark';
        app.setAttribute('light-mode', 'dark');
    }
}

function hideHeader() {
    var x = document.getElementById("header");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
  }