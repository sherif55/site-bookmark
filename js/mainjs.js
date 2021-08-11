var nameInput=document.getElementById("name");
var urlInput=document.getElementById("url");
var inputs=document.getElementsByClassName("form-control");
var sites;

if(localStorage.getItem("siteslist")==null)
{
  sites=[];
}
else{
    sites=JSON.parse(localStorage.getItem("siteslist"));
    displaySites();
}

var addBtn=document.getElementById("addBtn");
addBtn.onclick=function(){
  addSites();
  displaySites();
  resetForm()
}

function addSites(){
    var site=
    {
        name:nameInput.value,
        url:urlInput.value,
    }
     sites.push(site);
     localStorage.setItem("siteslist",JSON.stringify(sites));
}

function displaySites(){
  
    var trs="";
    for(var i=0;i<sites.length;i++)
    {
       trs+=`
       <tr>
       <td>${sites[i].name}</td>
       <td><a class="btn btn-success" target="_blank" href="${sites[i].url}">Visit</a></td>
       <td><button onclick="deleteSite(${i})" class="btn btn-danger"> Delete </button></td>
       </tr>
       `
    }
    document.getElementById("tableBody").innerHTML=trs;
}
function deleteSite(index){
    sites.splice(index,1);
    displaySites();
    localStorage.setItem("siteslist",JSON.stringify(sites));
}

function resetForm(){
    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}
