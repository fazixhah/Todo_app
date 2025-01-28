document.getElementById('addButton').addEventListener('click', addTask);  
document.getElementById('taskInput').addEventListener('keypress', function(event) {  
    if (event.key === 'Enter') {  
        addTask();  
    }  
});  

function addTask() {  
    const taskInput = document.getElementById('taskInput');  
    const taskText = taskInput.value.trim();  

    if (taskText === '') {  
        return; // Don't add empty tasks  
    }  

    const taskList = document.getElementById('taskList');  
    const li = document.createElement('li');  

    li.textContent = taskText;  
    li.addEventListener('click', function() {  
        li.classList.toggle('completed'); // Toggle completion  
    });  

    const deleteButton = document.createElement('button');  
    deleteButton.textContent = 'Delete';  
    deleteButton.className = 'delete-button';  
    deleteButton.addEventListener('click', function(event) {  
        event.stopPropagation(); // Prevent toggle on delete button click  
        taskList.removeChild(li); // Remove task  
    });  

    li.appendChild(deleteButton);  
    taskList.appendChild(li);  
    taskInput.value = ''; // Clear input  
    taskInput.focus(); // Focus input after adding  
}
