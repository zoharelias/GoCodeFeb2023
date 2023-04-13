const body = document.querySelector('body');
const taskToAdd = document.querySelector('.task');
const btnAddTask = document.querySelector('.add');
const tasksList = document.querySelector('.tasks');
const btnViewAllTasks =  document.querySelector('.viewAll');
const btnVieDoneTasks =  document.querySelector('.viewDone');
const btnToggleMode =  document.querySelector('.darkMode');


const x = btnViewAllTasks.offsetLeft;
console.log('x=',x);

btnViewAllTasks.style.visibility = 'hidden';
btnVieDoneTasks.style.left = x;

const tasks = [];
const doneTasks = [];

taskToAdd.focus();

console.log(body.classList);
tasksList.classList.add('dark');
console.log(body.classList);

btnToggleMode.addEventListener('click',function(){
    console.log(body.classList);
    tasksList.classList.toggle('dark');
    tasksList.classList.toggle('light');
    console.log(body.classList);
});

btnViewAllTasks.addEventListener('click', refreshTaskList);
btnVieDoneTasks.addEventListener('click', viewOnlyDone);


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
    console.log('tasks',tasks,'doneTass:',doneTasks);
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
            // btnMarkAsDone.classList.add('taskSubItem');
            
            //const textDiv = document.createElement('span');
            const textDiv = document.createElement('div');
            textDiv.classList.add('taskSubItem');
            textDiv.classList.add('taskText');
            textDiv.classList.add('taskText' + index);
            textDiv.innerText = myTask;

            //taskDiv.innerText = myTask;
            //console.log('taskDivindex',index);
            taskDiv.appendChild(btnRemoveTask);
            //taskDiv.appendChild(btnMarkAsDone);
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
    console.log('REMOVE TASK, task id:', taskId);
    console.log('tasks',tasks,'doneTass:',doneTasks);

    //tasks.splice(taskId,1);
    delete tasks[taskId];
    doneTasks.forEach(function(doneTask,index){
        //console.log('doneTask:',doneTask,'index:',index);
        if(doneTask === taskId){
            doneTasks.splice(index,1);
        }
    });

    refreshTaskList();


    //setLineOnDoneTasks();
}


function markTaskAsDone(taskId){
    doneTasks.push(taskId);
    setLineOnDoneTasks();

    // const myTaskClassName = '.taskNumber' + taskId;
    // const taskToMark = document.querySelector(myTaskClassName);
    // taskToMark.style.textDecoration = 'line-through';
}


function setLineOnDoneTasks(){
    doneTasks.forEach(function(doneTask){
        //const myTaskClassName = '.taskNumber' + doneTask;
        const myTaskClassName = '.taskText' + doneTask;
        //console.log('class name:',myTaskClassName);
        const taskToMark = document.querySelector(myTaskClassName);
        taskToMark.style.textDecoration = 'line-through';
    });
}

function viewOnlyDone(){
    tasksList.innerHTML = '';
    doneTasks.forEach(function(doneTask){
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('taskNumber' + doneTask);
        taskDiv.innerText = tasks[doneTask];
        tasksList.appendChild(taskDiv);
    
    });
    

    btnViewAllTasks.style.visibility = 'visible';
    btnVieDoneTasks.style.visibility = 'hidden';

    
}
