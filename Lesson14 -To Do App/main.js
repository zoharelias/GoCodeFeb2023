const body = document.querySelector('body');
const taskToAdd = document.querySelector('.task');
const btnAddTask = document.querySelector('.add');
const tasksList = document.querySelector('.tasks');
const btnViewAllTasks =  document.querySelector('.viewAll');
const btnVieDoneTasks =  document.querySelector('.viewDone');
const btnToggleMode =  document.querySelector('.darkMode');


const tasks = [];
const doneTasks = [];
let colorMode ='dark';

taskToAdd.focus(); //focus on the text input

tasksList.classList.add('dark');

btnToggleMode.addEventListener('click',function(){
    if(colorMode === 'dark'){
        colorMode = 'light';
    } else {
        colorMode = 'dark';
    }
    tasksList.classList.toggle('dark');
    tasksList.classList.toggle('light');
    const tasksDivs = document.querySelectorAll('.taskItem');
    tasksDivs.forEach(function(taskDiv){
        taskDiv.classList.toggle('taskItem-light');
        taskDiv.classList.toggle('taskItem-dark');
    });
});

btnViewAllTasks.addEventListener('click', refreshTaskList);
btnVieDoneTasks.addEventListener('click', viewOnlyDone);


//Enter key to add
taskToAdd.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        btnAddTask.click();
    }
});

btnAddTask.addEventListener('click',function(){
    if (taskToAdd.value ==='') {
        taskToAdd.focus();
        return;
    }
    tasks.push(taskToAdd.value);
    taskToAdd.value ='';
    refreshTaskList();
    taskToAdd.focus();
});


function refreshTaskList(){
    tasksList.innerHTML = '';
    tasks.forEach(function(myTask,index){
        if(myTask !== undefined){
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('taskNumber' + index);
            taskDiv.classList.add('taskItem');
            if(colorMode === 'dark'){
                taskDiv.classList.add('taskItem-dark');
            } else {
                taskDiv.classList.add('taskItem-light');
            }
            const btnRemoveTask = document.createElement('button');
            btnRemoveTask.innerText = 'Remove Task';
            btnRemoveTask.setAttribute('onclick', 'removeTask(' + index + ')');
            btnRemoveTask.classList.add('taskSubItem');
            btnRemoveTask.classList.add('button-8')

            const divMarkAsDone = document.createElement('div');
            divMarkAsDone.classList.add('taskSubItem');
            
            const btnMarkAsDone = document.createElement('button');
            btnMarkAsDone.innerText = 'Mark Task as DONE';
            btnMarkAsDone.setAttribute('onclick', 'markTaskAsDone(' + index + ')');
            btnMarkAsDone.classList.add('button-7');
            divMarkAsDone.appendChild(btnMarkAsDone);

            const textDiv = document.createElement('div');
            textDiv.classList.add('taskSubItem');
            textDiv.classList.add('taskText');
            textDiv.classList.add('taskText' + index);
            textDiv.innerText = myTask;

            taskDiv.appendChild(btnRemoveTask);
            taskDiv.appendChild(divMarkAsDone);
            taskDiv.appendChild(textDiv);
            tasksList.appendChild(taskDiv);

            btnViewAllTasks.style.visibility = 'hidden';
            btnVieDoneTasks.style.visibility = 'visible';
        }

    });
    setLineOnDoneTasks();
}



function removeTask(taskId){
    delete tasks[taskId];
    doneTasks.forEach(function(doneTask,index){
        if(doneTask === taskId){
            doneTasks.splice(index,1);
        }
    });

    refreshTaskList();
}


function markTaskAsDone(taskId){
    doneTasks.push(taskId);
    setLineOnDoneTasks();
}


//strike throuh line on leeters of done tasks
function setLineOnDoneTasks(){
    doneTasks.forEach(function(doneTask){
        const myTaskClassName = '.taskText' + doneTask;
        const taskToMark = document.querySelector(myTaskClassName);
        taskToMark.style.textDecoration = 'line-through';
    });
}

function viewOnlyDone(){
    tasksList.innerHTML = '';
    doneTasks.forEach(function(doneTask){
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskNumber' + doneTask);
        taskDiv.classList.add('taskItem');
        if(colorMode === 'dark'){
            taskDiv.classList.add('taskItem-dark');
        } else {
            taskDiv.classList.add('taskItem-light');
        }
    taskDiv.innerText = tasks[doneTask];
        tasksList.appendChild(taskDiv);
    
    });
    

    btnViewAllTasks.style.visibility = 'visible';
    btnVieDoneTasks.style.visibility = 'hidden';
    
}
