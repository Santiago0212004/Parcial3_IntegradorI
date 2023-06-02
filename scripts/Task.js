class Task {

    constructor(task) {
        this.task=task;
    }
    render(){
        
        let container = document.createElement('div');
        container.classList.add('Task');
        container.style.width = '900px';
        container.style.height = '80px';

        let body = document.createElement('div');
        body.classList.add('task-body');

        let title = document.createElement('h4');
        title.classList.add('task-title');

        let id = document.createElement('p');
        id.classList.add('task-id');

        let state = document.createElement('p');
        state.classList.add('task-state');

        let description = document.createElement('p');
        description.classList.add('task-description');
        
        let changeState = document.createElement('button');
        changeState.classList.add('btn');
        changeState.setAttribute('id', 'changeState');

        let deleteTask = document.createElement('button');
        deleteTask.classList.add('btn');
        deleteTask.setAttribute('id', 'deleteTask');

        let space = document.createElement('p');

        container.appendChild(body);
        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(changeState);
        body.appendChild(deleteTask);
        body.appendChild(space);
        

        title.textContent = this.task.title;
        description.textContent = this.task.description;
        changeState.textContent = "Cambiar Estado";
        deleteTask.textContent = "Eliminar";
        space.textContent = "";
        
        changeState.addEventListener('click', e => {
            let url = "http://localhost:8080/tasks/";
            url+= (this.task.id).toString();
            url+= "/state/";

            let stateId = (this.task.state.id).toString();

            if(stateId == "1"){
                stateId = "2";
            }
            else if(stateId == "2"){
                stateId = "3";
            }
            else if(stateId == "3"){
                stateId = "1";
            }

            url+= stateId;
            fetch(url, {method: 'PUT'})

            location.reload(true);
        })

        deleteTask.addEventListener('click', e => {
            let url = "http://localhost:8080/tasks/delete/";

            url+= (this.task.id).toString();
 
            fetch(url, {method: 'DELETE'})

            location.reload(true);
        })

        return container;
    }
}