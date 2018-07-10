console.log("hello, js");

// UI variables 

const foo = document.getElementById("foo");
const task_list = document.querySelector(".collection");
const filter = document.getElementById("filter");
const taskInput = document.getElementById("task");
const clearButton = document.getElementById("clear-task");

foo.addEventListener('click',fun);
function fun(e){
    
    li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    remIcon = document.createElement('a');
    remIcon.className = "delete-item secondary-content";
    remIcon.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(remIcon); 
    task_list.appendChild(li);
    e.preventDefault();
    

}