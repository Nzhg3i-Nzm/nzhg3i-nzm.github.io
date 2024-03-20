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
  navimage.setAttribute("style", "width: 375px; height: 187.5px; border-radius: 10px;");
  navdiv.append(navimage);
  
  let c = document.createElement("center");
  let left = 0;
  let csstop = 20;
  for (w in words){
    let button = document.createElement("div");
    button.setAttribute("class", "navbutton");
    button.setAttribute("style", "top: "+csstop+"; left: "+left+";");

    if (left=30){
      left=0;
      csstop+=20;
    }
    left+=30
    
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
  top.insertBefore(center, after);
  
  top.insertBefore(navdiv, after);
}

function displayNav(){
  let vis = document.getElementsByClassName("full-nav");
  if (vis.navbar.style.visibility = "hidden"){
    vis.navbar.style.visibility = "visible";
  }
  else{
    vis.navbar.style.visibility = "hidden";
  }
}
