async function getJson(){
  const res = await fetch("../../vulns.json");
  const vulns = await res.json();
  console.log(vulns);
}
