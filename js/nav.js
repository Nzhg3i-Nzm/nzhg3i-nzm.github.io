//takes 2 args, parent is the id of the parent element, child is the id of the element to insert the navbar above
function makeNavbar(parent, child){
  let words = ["Home", "Stats", "Achievements"];
  let loc = ["index.html", "stats.html", "achievements.html"];
  //words is words for the buttons, loc is locations for the buttons.
  //words and loc must have the same number of elements
  let top = document.getElementById(parent);
  let after = document.getElementById(child);
  let navdiv = document.createElement("img");
  navdiv.setAttribute("id", "navbar");
  navdiv.setAttribute("src", "../../images/navimage.jpg");
  navdiv.setAttribute("style", "visibility: shown; z-index: 9; position: absolute; border-radius: 10px; width: 1500px; height: 750px;");
  navdiv.setAttribute("class", "full-nav");
  let c = document.createElement("center");
  for (w in words){
    let button = document.createElement("div");
    button.setAttribute("class", "navbutton");
    let l = "../../"+loc[w];
    button.setAttribute("onclick", "window.location.href='"+l+"'");
    let text = document.createElement("p");
    text.setAttribute("style", "display: inline; font-family: 'Kode Mono'");
    text.innerHTML=words[w];
    button.append(text);
    c.append(button)
  }
  navdiv.append(c);
  top.insertBefore(navdiv, after)
}

function openNav(){
  document.getElementsByClassName("full-nav").style.visibility = "shown";
}
function closeNav(){
  document.getElementsByClassName("full-nav").style.visibility = "hidden";
}
