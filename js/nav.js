//takes 2 args, parent is the id of the parent element, child is the id of the element to insert the navbar above
function makeNavbar(parent, child){
  let words = ["Home", "Stats"];
  let loc = ["index.html", "stats.html"];
  //words is words for the buttons, loc is locations for the buttons.
  //words and loc must have the same number of elements
  let top = document.getElementById(parent);
  let after = document.getElementById(child);
  let navdiv = document.createElement("div");
  navdiv.setAttribute("id", "navbar");
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
