//insertBefore(parent, childelement)
/*
<div id="navbar">
  <center>
    <div class="navbutton" onClick="window.location.href='../../index.html'">
      <p style="display: inline;">Home</p>
    </div>
    <div class="navbutton" onClick="window.location.href='../../stats.html'">
      <p style="display: inline;">Stats</p>
    </div>
  </center>
</div>
*/
function nav(parent, child, words, loc){
  let parent = document.getElementById(parent);
  let after = document.getElementById(child);
  let navdiv = document.createElement("div");
  navdiv.setAttribute("id", "navbar");
  let c = document.createElement("center");
  for (w in words){
    let button = document.createElement("div");
    button.setAttribute("class", "navbutton");
    let l = "../../"+words[w];
    button.setAttribute("onclick", "window.location.href="+l);
    let text = document.createElement("p");
    text.setAttribute("style", "display: inline;");
    text.innerHTML=words[w];
  }
}
