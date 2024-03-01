async function getVulns(){
  const res = await fetch("../../vulns.json");
  const vulns = await res.json();
  console.log(vulns);
  return JSON.stringify(vulns);
}

async function createTable(){
  var v = await getVulns();
  var vulns = JSON.parse(v);
  const keys = Object.keys(vulns);
  var values = new Array();

  for (key in keys){
    //get all keys
    values.push(vulns.key);
  }

  for (let i=0; i<keys.length; i++){
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
}
