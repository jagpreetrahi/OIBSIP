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


function createdTodo(){
   
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const result_todo = document.getElementById("result-todo");
    const child  = document.createElement("div");
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