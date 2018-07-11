

// UI variables 

const foo           = document.getElementById("foo");
const task_list     = document.querySelector(".collection");
const filter        = document.getElementById("filter");
const taskInput     = document.getElementById("task");
const clearButton   = document.getElementById("btn");

//Event listeners
taskInput.addEventListener('focus',fun2);
task_list.addEventListener('click',cls);
clearButton.addEventListener('click',task_clear);
foo.addEventListener('click',fun);

// implementation

function fun2()
{
    taskInput.addEventListener('blur',function(){
        
        if(taskInput.value == "") {
            foo.disabled = true;
        } else {
            foo.disabled = false;
        }

    })
    
}

function fun(e)
{

    li = document.createElement('li');//creating element 
    li.className = "collection-item ";//assign class name
    li.appendChild(document.createTextNode(taskInput.value));//creating text node and assign append to li
    remIcon = document.createElement('a');//anchor tag create
    remIcon.className = "delete-item secondary-content";//class name 
    remIcon.innerHTML='<i class="fa fa-remove "></i>';//add innerHTML
    li.appendChild(remIcon); //append to li
    task_list.appendChild(li);//lastly li append to ul
    taskInput.value = "";
    e.preventDefault();
    

}


function cls(event)
{
   
   if(event.target.parentElement.classList.contains("delete-item")){
       if(confirm('Are you sur?')) {
        event.target.parentElement.parentElement.remove();
       }
   }
}

function task_clear(event) 
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
        }
        
    });

})
