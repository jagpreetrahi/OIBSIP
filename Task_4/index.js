function calculate(){
    const button = document.querySelectorAll(".btn");
    const adv_button = document.querySelectorAll(".lg-btn");
    const result = document.getElementById("result");
    const history = document.getElementById("his");

    let currentValue = '';
    let historyVisible = false;

   
    let historyContainer = document.createElement("div");
    
    history.appendChild(historyContainer);
    
    button.forEach((button) => {
        button.onclick = () => {
            const value = button.innerText;

            if(!isNaN(value)){
                 currentValue += value;
                 result.innerText = currentValue
            }
           

            else if(value === 'Enter'){

                if(currentValue.trim() !== ''){


                    addTohistory(currentValue);
                
                    currentValue = eval(currentValue);
                }
               
             
                
               
            }
          

            else {
                if(currentValue === '=') return;
                
                if (value === '/' || value === '+' || value === '-' || value === '%' || value === '*') {
                    currentValue += value;
                } 
                
                else if (value === '√') {  
                    
                    currentValue = Math.sqrt(parseFloat(currentValue)); 
                    
                    result.innerText = currentValue;

                } 

                else if(value === '±'){
                       
                    if (currentValue !== '') {
                        currentValue = (parseFloat(currentValue) * -1).toString(); // Toggle sign
                    }
                }

                else {
                    currentValue += value;
                }
                

                
            }
            result.innerText = currentValue;
            closeHistory();
        }
        
    })

    adv_button.forEach((button) => {
        button.onclick = () => {
            const value = button.innerText;

            if(value === '(' || value === ')'){
                currentValue += value;
                result.innerText = currentValue
            }

            closeHistory();
            
        }
        
    })

    const clear = document.getElementById("clear");
    clear.addEventListener("click" , () => {
        currentValue  = '';
        result.innerText = '';
        closeHistory();
    })

    const del = document.getElementById("del");
    del.addEventListener("click" , () => {
        currentValue = currentValue.slice(0 ,-1)
        result.innerText = currentValue;
        closeHistory();
    })

    const enter = document.getElementById("enter");
    enter.addEventListener("click" , () => {
        result.innerText = currentValue;
    })

    const answer = document.getElementById("ans");
    answer.addEventListener("click" , () => {
        if(currentValue.trim() !== ''){
            addTohistory(currentValue);
            result.innerText = eval(currentValue);
            currentValue = result.innerText;
        }
       
    })

    //Toggle history visibility
    history.addEventListener("click", () => {
        historyContainer.classList.toggle("active")
        historyVisible = !historyVisible;
        historyContainer.style.display = historyVisible ? 'block' : 'none'
    })


    
    // function to add history
    function addTohistory(expression){
        
        const historyItem = document.createElement("div");
        historyItem.innerText = `${expression} = ${eval(expression)}`;
        historyContainer.prepend(historyItem);
        historyItem.style.padding = "5px";
        historyItem.style.borderRadius = "8px";
        historyItem.style.marginLeft = "290px";
        historyContainer.appendChild(historyItem);
        history.style.display = 'block'
        historyVisible = true;

    }

   
    // **Function to Hide History**
    function closeHistory() {
        historyContainer.style.display = "none";
        historyVisible = false;
    }

    
}