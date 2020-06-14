/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openMenu() {
  // Fade Out
  document.getElementById("masterMenu").classList.remove("show");
  document.getElementById("masterMenu").classList.remove("fadeIn");

  // Fade In
  document.getElementById("dropDownMenu").classList.add("show");
  document.getElementById("dropDownMenu").classList.add("fadeIn");

}

function hideMenu() {
  document.getElementById("dropDownMenu").classList.remove("show");
  document.getElementById("masterMenu").classList.remove("show");
  document.getElementById("nameBox").classList.remove("show");

}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.menu')) {
    console.log("Resetting menu.");
    document.getElementById("masterMenu").classList.remove("fadeIn");
    document.getElementById("dropDownMenu").classList.remove("fadeIn");
    document.getElementById("dynamicTitle").classList.remove("fadeIn");
    document.getElementById("resumeBox").classList.remove("fadeIn");
    document.getElementById("projectBox").classList.remove("fadeIn");

    document.getElementById("masterMenu").classList.add("show");
    document.getElementById("nameBox").classList.add("show");

    document.getElementById("dropDownMenu").classList.remove("show");
    document.getElementById("dynamicTitle").classList.remove("show");
    document.getElementById("resumeBox").classList.remove("show-table");
    document.getElementById("projectBox").classList.remove("show-img");


  }
}

// Displays brief resume table
function showResume() {
  console.log("Showing resume.");
  document.getElementById("resumeBox").classList.add("show-table");
  document.getElementById("resumeBox").classList.add("fadeIn");

  hideMenu();
}

function showProjects() {
  hideMenu();
  console.log("Showing projects.");
  document.getElementById("imgID").src = myImageObjects[imageCount].image;
  document.getElementById("imgHref").href = myImageObjects[imageCount].url;
  document.getElementById("dynamicTitle").innerText = myImageObjects[imageCount].title;

  document.getElementById("dynamicTitle").classList.add("show");
  document.getElementById("projectBox").classList.add("show-img");
  document.getElementById("dynamicTitle").classList.add("fadeIn");
  document.getElementById("projectBox").classList.add("fadeIn");
}

const myImageObjects = [
  {image: "img/project1.jpg", url: "https://www.thingiverse.com/thing:4126483", title: "AIR MONITOR DEVICE"},
  {image: "img/project2.jpg", url: "https://www.thingiverse.com/thing:3601839", title: "WiFi WEATHER STATION"},
  {image: "img/project3.jpg", url: "https://www.thingiverse.com/thing:3532639", title: "IOT CLOCK"},
  {image: "img/project4.jpg", url: "https://github.com/wilyarti/AirMonitor", title: "AIR MONITOR APP"},
  {image: "img/project5.jpg", url: "https://opens3.net/channel-grapher.html", title: "CHANNEL GRAPHER"},
  {image: "img/project6.jpg", url: "https://www.thingiverse.com/thing:3601839", title: "LORA WEATHER STATION"},
  {image: "img/project7.jpg", url: "https://wilyarti-howard.net/hexbattle.html", title: "HEX BATTLE GAME"},

];
var imageCount = 0;

function nextImage() {
  imageCount++;
  if (imageCount > myImageObjects.length - 1) {
    imageCount = 0;
  }
  document.getElementById("dynamicTitle").classList.add("show");

  document.getElementById("imgID").src = myImageObjects[imageCount].image;
  document.getElementById("imgHref").href = myImageObjects[imageCount].url;
  document.getElementById("dynamicTitle").innerText = myImageObjects[imageCount].title;
}
