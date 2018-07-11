

// UI variables 

const foo           = document.getElementById("foo");
const task_list     = document.querySelector(".collection");
const filter        = document.getElementById("filter");
const taskInput     = document.getElementById("task");
const clearButton   = document.getElementById("btn");

//Event listeners
taskInput.addEventListener('focus',disable_add_task_button);
task_list.addEventListener('click',clear_task);
clearButton.addEventListener('click',all_task_clear);
foo.addEventListener('click',create_new_task);
document.addEventListener('DOMContentLoaded',saved_data);
// implementation

function disable_add_task_button()
{
    taskInput.addEventListener('blur',function(){
        
        if(taskInput.value == "") {
            foo.disabled = true;
        } else {
            foo.disabled = false;
        }

    });
    
}

function create_new_task(e)
{      
    if(taskInput.value == ''){
        //do nothing
    } else {
    
    add_collection(taskInput.value);
    storageTaskInLocalStorage(taskInput.value);
    taskInput.value = "";
    }   
}

function clear_task(event)
{ 
   if(event.target.parentElement.classList.contains("delete-item")){

       if(confirm('Are you sur?')) {
        tasks = []
        ele = localStorage.getItem('tasks');
        tasks = JSON.parse(ele);
        tasks.splice(tasks.indexOf(event.target.parentElement.parentElement.textContent),1);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        event.target.parentElement.parentElement.remove();
       }
   }
}

function all_task_clear(event) 
{
    while (task_list.firstChild) {
        task_list.removeChild(task_list.firstChild);
    }
    localStorage.removeItem('tasks');
}

filter.addEventListener('keyup',(event)=>{

    text = (event.target.value);
    document.querySelectorAll(".collection-item").forEach((task_list)=>{
        if(task_list.firstChild.textContent.indexOf(text)!=-1){
           task_list.style.display = 'block'; 
        } else {
            task_list.style.display = 'none';
        };
    });    

});

function storageTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        localStorage.removeItem('tasks');
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
}
function saved_data(event) 
{   
    task = localStorage.getItem('tasks');
    task = JSON.parse(task);
    if(task === null){
        //don't so anything 
    } else {
         task.forEach((task)=>add_collection(task));    
    }
}
function add_collection(el){

    li = document.createElement('li');//creating element 
    li.className = "collection-item ";//assign class name
    li.appendChild(document.createTextNode(el));//creating text node and assign append to li
    remIcon = document.createElement('a');//anchor tag create
    remIcon.className = "delete-item secondary-content";//class name 
    remIcon.innerHTML='<i class="fa fa-remove "></i>';//add innerHTML
    li.appendChild(remIcon); //append to li
    task_list.appendChild(li);//lastly li append to ul
}