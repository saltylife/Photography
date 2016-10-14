
/*function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}*/
/*var myImage = document.getElementById("mainImage");
var imageArray = ["C:\Users\Rohit\Downloads\Projects\Proj\Images\bird.jpg","C:\Users\Rohit\Downloads\Projects\Proj\Images\photographer.jpg",
    "C:\Users\Rohit\Downloads\Projects\Proj\Images\cam.jpg","C:\Users\Rohit\Downloads\Projects\Proj\Images\zoom.jpg"];
var imageIndex = 0;

function changeImage()
{
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>= imageArray.length){
        imageIndex=0;
    }
}
setInterval(changeImage,5000);*/

var myImage = document.getElementById("mainImage");

var imageArray = ["Images/bird.jpg","Images/zoom.jpg","Images/photographer.jpg","Images/cam.jpg"];
var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

// setInterval is also in milliseconds
setInterval(changeImage,5000);