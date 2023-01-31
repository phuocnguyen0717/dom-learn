function handerClick(){
    console.log("click")
}
var colorSkinId = document.getElementById("color-skin")
function changeStyleColor(href){
    colorSkinId.setAttribute("href", href)
}
var containerDiv = document.querySelector(".container");
function changeStyleContainer(type){
    var newContainer = "container" + " " +type;
    containerDiv.setAttribute("class", newContainer);
}