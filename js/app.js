
showNotes();
let addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",function(e){
    let addText=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value="";
    
   showNotes();
})

function showNotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let html="";
     notesObj.forEach(function(element,index) {
         html+=`
         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">Note ${index+1}</h5>
             <p class="card-text"> ${element}</p>
             <a href="#" id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
           </div>
        </div>
         `
     });

     let notesElem=document.getElementById("notes");
     if(notesElem.length!=0)
     {
         notesElem.innerHTML=html;
     }

}

function deleteNote(index)
{
   
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesObj=[];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}

let search =document.getElementById("searchTxt");
search.addEventListener("input",function()
{
     let noteCard=document.getElementsByClassName("noteCard");
     let txt=search.value;
     Array.from(noteCard).forEach(function(element){
         let innrtxt=element.getElementsByTagName('p')[0].innerText;
         if(innrtxt.includes(txt))
         {
             element.style.display="block";
         }
         else{
            element.style.display="none";
         }
     })
})
