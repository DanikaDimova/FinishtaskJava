function upDate(previewPic){
  document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
  document.getElementById("image").innerHTML = previewPic.alt;
  }

function unDo(){
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Black & White";
  }


/*currentImages = document.querySelectorAll(".preview1 a    ")
for (var i = 0; i < currentImages.length; i++) {
  console.log("tabindex"+ i)
  /*randomImg = "preview1/" + options[Math.floor(Math.random() * options.length)];
  currentImages[i].src = randomImg
  currentImages[i].setAttribute("tabindex","0")
}

/*var currentImages = document.querySelectorAll(".preview img");
for (var i = 0, len=currentImages.length; i < len; i++){
  currentImages[i].setAttribute("tabindex","0");
}*/

function focusapp(previewPic2){
  document.getElementById("image").style.backgroundImage = "url(" + previewPic2.src + ")";
  document.getElementById("image").innerHTML = previewPic2.alt;
  console.log("focus!!"); 
}

function blurapp(){
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Black & White";
  console.log("blur!!");
}         