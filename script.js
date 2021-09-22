// DOM varaible declaration
input = document.getElementById("input");
addBtn = document.getElementById("add_btn");
ul = document.getElementsByTagName("ul");

function addWhenClick(){
    if(input.value.length>0){
        createNewList();
    }
}

function addWhenEnter(event){
    if(input.value.length>0 && event.which === 13){
        createNewList();
    }
}
// create new To Do List
function createNewList(){
    let newDiv = document.createElement("div");
    let newLi = document.createElement("li");
    let newI = document.createElement("i");

   
    newDiv.classList.add("ToDoBox");
    newLi.appendChild(document.createTextNode(input.value));
    input.value="";
    newI.classList.add("fas", "fa-trash");

    newDiv.appendChild(newLi);
    newDiv.appendChild(newI);
    ul[0].appendChild(newDiv);

    // toggle cross line when click
    function crossLine(){
        newLi.classList.toggle("done");
    }

    newLi.addEventListener("click", crossLine);

    // Delete node when click the button(<i>)
    function deleteList(){
        newDiv.parentNode.removeChild(newDiv);
    }

    newI.addEventListener("click", deleteList);
}

// add EventListers
addBtn.addEventListener("click", addWhenClick);
input.addEventListener("keypress", addWhenEnter);