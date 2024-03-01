async function getVulns(){
  const res = await fetch("../../vulns.json");
  const vulns = await res.json();
  console.log(vulns);
  return vulns;
}

function createTable(){
  var vulns = getVulns();
  const v_obj = JSON.parse(vulns);
  const keys = Object.keys(v_obj);
  var values = new Array();

  for (key in keys){
    //get all keys
    values.push(v_obj.key);
  }

  while (var i=0; i<keys.length; i++){
    var t = document.getElementById("table");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML=keys[i];
    var td2 = document.createElement("td");
    td2.innerHTML=values[i];
    tr.appendChild(td);
    tr.appendChild(td2);
    t.appendChild(tr);
}
