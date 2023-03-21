var projectImg = document.getElementsByTagName("img");
for (var i = 0; i < projectImg.length; i++)  {
    projectImg[i].title = projectImg[i].alt;
};

var head = document.getElementById("head");
var headClick = function() {
    head.textContent = "Aisha Mujahid Kabir"
};
head.addEventListener("click", headClick);


var prgh = document.getElementById("prgh");
var prghClick = function() {
    prgh.textContent = "A Front-End Developer"
};
prgh.addEventListener("click", prghClick);
