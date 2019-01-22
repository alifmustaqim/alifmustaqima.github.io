let count = 0;

document.getElementById("myBtn").onmouseenter = function(){moveNow()}

function moveNow () {

    count = count + 1;
    console.log(count);

    if(count<=10){
        document.getElementById("myBtn").style.left = randomLeft();
        document.getElementById("myBtn").style.bottom = randomBottom();
    }
    else{
        document.getElementById("myBtn").onclick = function(){successAlready()};
        
    }
    
}

function successAlready(){
    window.alert("You Did It!");
}
  
  function randomLeft() {

    const position = Math.floor(Math.random()*305);
    return position + "px"
  }

  function randomBottom() {

    const position = Math.floor(Math.random()*325);
    return position + "px"
  }

//////////////////////////////////////////list////////////////////////////////
let input = document.getElementById("addNewTask")
let taskList = document.getElementById("taskList")

document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault()
    addNewTask();
};

function addNewTask() {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    taskList.appendChild(li);
    input.value = "";
    
}





