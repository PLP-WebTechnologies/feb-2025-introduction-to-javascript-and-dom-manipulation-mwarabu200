function onClick() {
    document.getElementById('style').style.color = "red";
}

function remove() {
    // const element = document.getElementById("element")
    // element.parentNode.removeChild(element)
    document.getElementById("element").parentNode.removeChild(document.getElementById("element"))
}


function display() {
    document.getElementById("text").innerHTML = "Click to change text dynamically";
}