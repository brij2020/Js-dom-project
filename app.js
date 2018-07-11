

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

// implementation

function disable_add_task_button()
{
    taskInput.addEventListener('blur',function(){
        
        if(taskInput.value == "") {
            foo.disabled = true;
        } else {
            foo.disabled = false;
        }

    })
    
}

function create_new_task(e)
{
    e.preventDefault();    
    if(taskInput.value == ''){
        //do nothing
    } else {
    li = document.createElement('li');//creating element 
    li.className = "collection-item ";//assign class name
    li.appendChild(document.createTextNode(taskInput.value));//creating text node and assign append to li
    remIcon = document.createElement('a');//anchor tag create
    remIcon.className = "delete-item secondary-content";//class name 
    remIcon.innerHTML='<i class="fa fa-remove "></i>';//add innerHTML
    li.appendChild(remIcon); //append to li
    task_list.appendChild(li);//lastly li append to ul
    taskInput.value = "";
    
    
    }
    
}


function clear_task(event)
{
   
   if(event.target.parentElement.classList.contains("delete-item")){
       if(confirm('Are you sur?')) {
        event.target.parentElement.parentElement.remove();
       }
   }
}

function all_task_clear(event) 
{
    while (task_list.firstChild) {
        task_list.removeChild(task_list.firstChild);
    }
    
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
