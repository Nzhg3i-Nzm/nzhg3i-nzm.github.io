//takes 2 args, parent is the id of the parent element, child is the id of the element to insert the navbar above
function makeNavbar(parent, child){
  let words = ["Home", "Stats", "Achievements"];
  let loc = ["index.html", "stats.html", "achievements.html"];
  //words is words for the buttons, loc is locations for the buttons.
  //words and loc must have the same number of elements
  let top = document.getElementById(parent);
  let after = document.getElementById(child);
  
  let navdiv = document.createElement("div");
  navdiv.setAttribute("id", "navbar");
  navdiv.setAttribute("class", "full-nav");
  navdiv.setAttribute("style", "visibility: hidden; z-index: 9; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);");
  
  let navimage = document.createElement("img");
  navimage.setAttribute("src", "../../images/navimage.jpg");
  navimage.setAttribute("style", "width: 562.5px; height: 281.25px; border-radius: 10px;");
  navdiv.append(navimage);
  
  let c = document.createElement("center");
  let left = 84.375;
  let csstop = 50;
  for (w in words){
    let button = document.createElement("div");
    button.setAttribute("class", "navbutton");
    button.setAttribute("style", "top: "+csstop+"; left: "+left+";");

    left+=200
    if (left>=400){
      left=84.375;
      csstop+=40;
    }
    
    let l = "../../"+loc[w];
    button.setAttribute("onclick", "window.location.href='"+l+"'");
    let text = document.createElement("p");
    text.setAttribute("style", "display: inline; font-family: 'Kode Mono'");
    text.innerHTML=words[w];
    button.append(text);
    c.append(button)
  }
  navdiv.append(c);

  let center = document.createElement("center");
  let openclose = document.createElement("div");
  let buttontext = document.createElement("p");
  buttontext.setAttribute("style", "display: inline; font-family: 'Kode Mono'");
  buttontext.innerHTML = "Navigation";
  openclose.setAttribute("class", "openclosebutton");
  openclose.append(buttontext);
  openclose.setAttribute("onclick", "displayNav()");
  center.append(openclose);

  let navhead = document.createElement("div");
  navhead.setAttribute("id", "navhead");
  navhead.append(center);
  top.insertBefore(navhead, after);
  
  top.insertBefore(navdiv, after);

  dragElement(document.getElementById("navbar"));
}

windowmode = true;
windows = [];
windowcount = 0;

function makeWindow(name, url){
  if (windowmode==true){
    head = document.createElement("div");
    head.setAttribute("style", "background-color: lime; width: 500px; height: 200px; position: absolute; border-top-left-radius: 10px; border-top-right-radius: 10px;");
    head.setAttribute("id", name+"_window");
    headtext = document.createElement("p");
    headtext.innerHTML = name;
    head.append(headtext);

    close = document.createElement("img");
    close.setAttribute("src", "../../images/close.png");
    close.setAttribute("style", "width: 50px; height: 50px; float: right;");
    close.setAttribute("onclick", "removeWindow(\'"+name+"\', "+windowcount+")");
    head.append(close);
    
    div = document.createElement("div");
    iframe = document.createElement("iframe");
    iframe.setAttribute("src", "../../"+url);
    iframe.setAttribute("style", "width: 500px; height: 500px;");
    div.append(iframe);
    head.append(div);
    
    document.body.appendChild(head);
    windows.push(name+"_window");
    windowcount+=1;
    dragElement(document.getElementById(name+));
  }
}

function removeWindow(name, index){
  document.getElementById(name+"_window");
  firsthalf = windows.slice(0, index);
  secondhalf = windows(index);
  windows = firsthalf.concat(secondhalf);
  windowcount-=1;
}

function displayNav(){
  let vis = document.getElementsByClassName("full-nav");
  if (vis.navbar.style.visibility == "hidden"){
    vis.navbar.style.visibility = "visible";
  }
  else{
    vis.navbar.style.visibility = "hidden";
  }
}

//Taken from w3 schools
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
