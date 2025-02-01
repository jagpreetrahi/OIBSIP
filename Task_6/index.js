function editTodo(element) {
    
    const parent = element.parentElement;
    
    const title = parent.querySelector('h3');
    const description = parent.querySelector('h4');
    
    
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.style.background = 'none'
    titleInput.style.padding = '10px 20px';
    titleInput.style.borderRadius = '8px';
    titleInput.value = title.innerHTML;  

    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.style.background = 'none'
    descriptionInput.style.padding = '10px 20px';
    descriptionInput.style.borderRadius = '8px';
    descriptionInput.value = description.innerHTML;  

    
    parent.replaceChild(titleInput, title);
    parent.replaceChild(descriptionInput, description);
    
    
    const saveIcon = document.createElement('i');
    saveIcon.className = "fas fa-save";
    saveIcon.style.cursor = "pointer";
    saveIcon.setAttribute('onclick', 'saveTodo(this)');
    
    parent.replaceChild(saveIcon, element);  
}

function saveTodo(element) {
    
    const parent = element.parentElement;
    
    const titleInput = parent.querySelector('input[type="text"]');
    const descriptionInput = parent.querySelectorAll('input[type="text"]')[1];  
    
    
    const title = document.createElement('h3');
    title.innerHTML = titleInput.value; 
   
    const description = document.createElement('h4');
    description.innerHTML = descriptionInput.value;  

    if(title.innerHTML === '' || description.innerHTML === '' || (titleInput.innerHTML === '' && description.innerHTML === '')){

        alert("Hey, you should have some complete todo")
    }

    parent.replaceChild(title, titleInput);  
    parent.replaceChild(description, descriptionInput);  
    
    
    const editIcon = document.createElement('i');
    editIcon.className = "fas fa-edit";
    editIcon.style.cursor = "pointer";
    editIcon.setAttribute('onclick', 'editTodo(this)');
    
    parent.replaceChild(editIcon, element);  


}

function deleteTodo(element){

    const parent = element.parentElement;
    parent.remove()
}



function completedtask() {
    const small_child = document.getElementById("small");
    const checkbox = small_child.children[0]; 
    const completedTasksContainer = document.getElementById("completed-tasks");

    if (checkbox.checked) {
        
        const final_div = document.createElement("div");
        final_div.style.width = "500px";
        final_div.style.marginTop = "20px";
        final_div.style.padding = "20px";
        final_div.style.border = "1px solid black";
        

        
        final_div.appendChild(small_child.cloneNode(true)); 
        completedTasksContainer.appendChild(final_div); 
        small_child.remove(); 
    }
}

function pendingTask() {
    const small_child = document.getElementById("small");
    const checkbox = small_child.children[0]; 
    const pendingTasksContainer = document.getElementById("pending-tasks");

    if (!checkbox.checked) {
        
        const final_div = document.createElement("div");
        final_div.style.width = "500px";
        final_div.style.marginTop = "20px";
        final_div.style.padding = "20px";
        final_div.style.border = "1px solid black";
        final_div.appendChild(small_child.cloneNode(true)); 
        pendingTasksContainer.appendChild(final_div); 
        small_child.remove(); 
    }
}


function createdTodo(){
   
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const result_todo = document.getElementById("result-todo");
    const child  = document.createElement("div");
    child.setAttribute('id' , 'small');
    const checkbox = document.createElement("input")
    checkbox.type  = "checkbox";
    const firstChild = document.createElement("h3");
    firstChild.innerHTML = title;
    const secondChild = document.createElement("h4");
    secondChild.innerHTML = description;
    const thirdChild = document.createElement('i');
    thirdChild.className = "fas fa-edit";
    thirdChild.style.cursor = "pointer";
    thirdChild.setAttribute('onclick' , 'editTodo(this)')
    const fourthChild = document.createElement('i');
    fourthChild.setAttribute('onclick' , 'deleteTodo(this)')
    fourthChild.className = "fas fa-trash-alt";
    fourthChild.style.cursor = "pointer";
    child.append(checkbox ,firstChild , secondChild , thirdChild , fourthChild);
    result_todo.appendChild(child);

}