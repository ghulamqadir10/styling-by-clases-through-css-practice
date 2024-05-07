


function applyP() {
    var para = document.getElementsByTagName("p");
    for (var i = 0; i < para.length; i++) {
        para[i].className = "stylingp"
    }
}
function applyDiv() {
    var div = document.getElementsByTagName("div");
    for (var i = 0; i < div.length; i++) {
        div[i].className = "stylingdiv"
    }
}
function applyClassName() {
    var classname = document.getElementsByClassName("applystyling");
    for (var i = 0; i < classname.length; i++) {
        classname[i].className = "stylingclass"
    }
}