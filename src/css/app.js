let todos = [];
let initTask = document.querySelector('#addTaskButton');
let addTaskContainer = document.querySelector('#addTaskContainer');
let titleInput = document.getElementById('title');
let descInput = document.getElementById('desc');
let dueDateInput = document.getElementById('dueDate');
let addTask = document.querySelector('#addTask');
let todoContainer = document.getElementById('todoContainer');
const options = {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
};

initTask.addEventListener('click',()=>{
    addTaskContainer.classList.remove('hidden');
})

function renderTodos(){
    todoContainer.innerHTML = '';
    let statusClass ='';
    todos.forEach((todo,index)=>{
        if(todo.status === 'done'){
            statusClass = 'bg-green-50 border-green-400';
        }
        else{
            statusClass ="border-netural-200 bg-white";
        }
        let date = new Date(todo.dueDate);
        let fDate = date.toLocaleDateString('en', options);
        let div = document.createElement('div');
        div.innerHTML = ` <div class="border rounded-lg py-2 px-2 mt-4 ${statusClass}">
           <div class="flex justify-between">
                <div class="flex gap-2">
                    <input id="task-completed" data-id="${index}" type="checkbox" name="" id="">
                    <h1 class="text-base">${todo.title}</h1>
                </div>
                <button id="delete-task" data-id="${index}" class="text-neutral-400 hover:text-red-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg></button>
           </div>
            <p class="text-neutral-600 text-sm pl-6">${todo.desc}</p>
            <p class="text-neutral-600 text-sm pl-6">${fDate}</p>
        </div>`;
        todoContainer.appendChild(div);
    })

    let taskCompletedCheck = document.querySelectorAll('#task-completed');
    let deleteTaskBtn = document.querySelector('#delete-task');
    taskCompletedCheck.forEach((taskCompleted)=>{
        taskCompleted.addEventListener('click',(e)=>{
            let index = e.target.getAttribute('data-id');
            let todo = todos[index];
            todo.status = 'done';
            renderTodos();
        })
    })

    deleteTaskBtn.forEach((deleteBtn)=>{
        deleteBtn.addEventListener('click',(e)=>{
            e.stopPropogation();
            let index = e.target.getAttribute('data-id');
            todos.splice(index, 1);
            renderTodos();
        })
    })
}

addTask.addEventListener('click',()=>{
    let task = {
        title : titleInput.value,
        desc : descInput.value,
        dueDate : dueDateInput.value,
    }
    addTaskContainer.classList.add('hidden');
    todos.push(task);
    // console.log(todos);
    todoContainer.innerHTML = '';
    renderTodos();
})


var el = document.getElementById('todoContainer');
// var sortable = Sortable.create(el);
new Sortable(el, {
    group: {
        name: 'shared',
        pull: 'clone' // To clone: set pull to 'clone'
    },
    animation: 150
});




