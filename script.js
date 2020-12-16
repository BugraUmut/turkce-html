document.body.onload = () => {
    var h1 = document.getElementsByTagName("h1");
    for(var i = 0; i < h1.length; i++) {
        TimeToWork(h1[i]);
    }
    
    var button = document.getElementsByTagName("button");
    for(var i = 0; i < button.length; i++) {
        TimeToWork(button[i]);
    }
}

function TimeToWork(x) {
    if(x.hasAttribute("renk")) {
        colorSet(x)
    }
    if(x.hasAttribute("tıklandığında")) {
        x.setAttribute("onclick", x.getAttribute("tıklandığında"));
    }
    if(x.hasAttribute("özellikler")) {
        x.setAttribute("class", x.getAttribute("özellikler"));
    }
}

function colorSet(x) {
    
    var color = x.getAttribute("renk");

    switch(color) {
        case "beyaz":
            x.style.color = "white";
            break;
            
        case "kırmızı":
            x.style.color = "red";
            break;

        case "mavi":
            x.style.color = "blue";
            break;

        case "sarı":
            x.style.color = "yellow";
            break;

        case "turuncu":
            x.style.color = "orange";
            break;

        case "yeşil":
            x.style.color = "green";
            break;

        case "mor":
            x.style.color = "purple";
            break;

        case "pembe":
            x.style.color = "pink";
            break;
        default:
            x.style.color = "black";
            break;
    }
}