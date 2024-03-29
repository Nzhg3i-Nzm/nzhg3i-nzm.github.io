//takes 2 args, parent is the id of the parent element, child is the id of the element to insert the navbar above
function makeNavbar(parent, child){
  let words = ["Home", "Stats", "Achievements", "About"];
  let loc = ["index.html", "stats.html", "achievements.html", "about.html"];
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
    button.setAttribute("onclick", "navAction(\'"+words[w]+"\', \'"+l+"\')");
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


  label = document.createElement("label");
  label.setAttribute("class", "switch");
  label.setAttribute("style", "display: inline-block; position: absolute;");
  input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  span = document.createElement("span");
  span.setAttribute("class", "slider round");
  span.setAttribute("onclick", "setWindowMode()");
  label.append(input);
  label.append(span);

  windowtext = document.createElement("p");
  windowtext.setAttribute("style", "display: inline-block; padding: 2px; font-family: 'Kode Mono'; margin: auto;");
  windowtext.innerHTML = "Window Mode: ";

  center.append(windowtext);
  center.append(label);
  
  let navhead = document.createElement("div");
  navhead.setAttribute("id", "navhead");
  navhead.append(center);
  top.insertBefore(navhead, after);
  
  top.insertBefore(navdiv, after);

  dragElement(document.getElementById("navbar"));
}

windowmode = false;
windows = [];
windowcount = 0;

function setWindowMode(){
  if (windowmode==true){
    windowmode = false;
  }
  else{
    windowmode = true;
  }
}

function navAction(name, url){
  if (windowmode==true){
    makeWindow(name, url);
  }
  else{
    window.location.href = "../../"+url;
  }
}
  
function makeWindow(name, url){
  if (windowmode==true){
    head = document.createElement("div");
    head.setAttribute("style", "background-color: black; color: white; cursor: move; font-family: 'Kode Mono'; width: 750px; height: 100px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-top-left-radius: 10px; border-top-right-radius: 10px;");
    head.setAttribute("id", name+"_window");
    headtext = document.createElement("p");
    headtext.setAttribute("style", "display: inline-block;");
    headtext.innerHTML = name;
    head.append(headtext);

    close = document.createElement("img");
    close.setAttribute("src", "../../images/close.png");
    close.setAttribute("style", "width: 50px; height: 50px; float: right; margin-top: -5px;");
    close.setAttribute("onclick", "removeWindow(\'"+name+"\', "+windowcount+")");
    head.append(close);
    
    div = document.createElement("div");
    iframe = document.createElement("iframe");
    iframe.setAttribute("src", "../../"+url);
    iframe.setAttribute("style", "width: 750px; height: 400px; border: none; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;");
    div.append(iframe);
    head.append(div);
    
    document.body.appendChild(head);
    windows.push(name);
    windowcount+=1;
    dragElement(document.getElementById(name+"_window"));
  }
}

function removeWindow(name, index){
  document.getElementById(name+"_window").remove();
  firsthalf = windows.slice(0, index);
  secondhalf = windows.slice(index+1, windows.length);
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
