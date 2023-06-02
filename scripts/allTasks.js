const toDoContainer = document.getElementById('toDoContainer');
const doingContainer = document.getElementById('doingContainer');
const doneContainer = document.getElementById('doneContainer');
const refreshTasksBTN = document.getElementById('refreshTaksBTN');

async function getTasks(){
    toDoContainer.innerHTML = '';
    doingContainer.innerHTML = '';
    doneContainer.innerHTML = '';
    let response = await fetch("http://localhost:8080/tasks/all");
    let json = await response.json();
    console.log(json);
    json.forEach(t => {
        let task = new Task(t).render();
        if(t.state.id == 1){
            toDoContainer.appendChild(task);
        } else if(t.state.id == 2){
            doingContainer.appendChild(task);
        } else if(t.state.id == 3){
            doneContainer.appendChild(task);
        }
    });
    toDoContainer.innerHTML = divContent;
    doingContainer.innerHTML = divContent;
    doneContainer.innerHTML = divContent;
}

getTasks();