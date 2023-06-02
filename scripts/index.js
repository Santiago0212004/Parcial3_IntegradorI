const taskTitle = document.getElementById('taskTitle');
const taskDescription = document.getElementById('taskDescription');
const createTaskBTN = document.getElementById('createTaskBTN');

createTaskBTN.addEventListener('click', e => {
    e.preventDefault();
    let task = {
        title: taskTitle.value,
        description: taskDescription.value,
    };

    let json = JSON.stringify(task);

    fetch("http://localhost:8080/tasks/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })

    taskTitle.value = "";
    taskDescription.value = "";
    
})

