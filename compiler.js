document.body.onload = () => {
  var h1 = document.getElementsByTagName("baslik1");
  if (h1.length > 0) {
    main(h1, "h1", "baslik1");
  }
  
  var h2 = document.getElementsByTagName("baslik2");
  if (h2.length > 0) {
    main(h2, "h2", "baslik2");
  }
  
  var h3 = document.getElementsByTagName("baslik3");
  if (h3.length > 0) {
    main(h3, "h3", "baslik3");
  }
  
  var h4 = document.getElementsByTagName("baslik4");
  if (h4.length > 0) {
    main(h4, "h4", "baslik4");
  }

  var p = document.getElementsByTagName("paragraf");
  if(p.length > 0) {
    main(p, "p", "paragraf");
  }

  var button = document.getElementsByTagName("buton");
  if(button.length > 0) {
    main(button, "button", "buton");
  }

  displayAll();
};

function main(arr, elemTag, oldElemName) {
  for (var i = 0; i < arr.length; i++) {
    var y = arr[i];

    var x = document.createElement(elemTag);

    x.innerHTML = y.innerHTML;

    //document.body.appendChild(x);


    SetProperties(y, x);

    y.parentNode.appendChild(x);
  }
  var oldElements = document.getElementsByTagName(oldElemName);
  for(var j = 0; j < oldElements.length; i++) {
    oldElements[j].remove();
  }
}

function SetProperties(y, x) {
  if (y.hasAttribute("yazi-rengi")) {
    x.style.color = SetColor(y.getAttribute("yazi-rengi"));
  }
  if(y.hasAttribute("ozellikler")) {
    x.classList.add(y.getAttribute("ozellikler"));
  }
}

function SetColor(renk) {
  switch (renk) {
    case "mavi":
      return "blue";
      break;
      
    case "kirmizi":
      return "red";
      break;

    case "sari":
      return "yellow";
      break;

    case "turuncu":
      return "orange";
      break;

    case "yesil":
      return "green";
      break;

    case "beyaz":
      return "white";
      break;

    case "siyah":
      return "black";
      break;
      
    default:
      return "black";
      return;
  }
}

function displayAll() {
  document.head.insertAdjacentHTML("beforeend", "<style>body {display:block;}</style>");
}