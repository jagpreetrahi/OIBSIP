function calculate(){
    const button = document.querySelectorAll(".btn");
    const adv_button = document.querySelectorAll(".lg-btn");
    const result = document.getElementById("result");

    let currentValue = '';
    
    button.forEach((button) => {
        button.onclick = () => {
            const value = button.innerText;

            if(!isNaN(value)){
                 currentValue += value;
                 result.innerText = currentValue
            }
           
            else if(value === 'Enter'){
                currentValue = eval(currentValue);
                result.innerText = currentValue;

            }

            else {
                if(currentValue === '=') return;
                currentValue += value;
                result.innerText = currentValue
            }
        }
        
    })

    adv_button.forEach((button) => {
        button.onclick = () => {
            const value = button.innerText;

            if(value === '(' || value === ')'){
                currentValue += value;
                result.innerText = currentValue
            }
            
        }
        
    })

    const clear = document.getElementById("clear");
    clear.addEventListener("click" , () => {
        currentValue  = '';
        result.innerText = '';
    })

    const del = document.getElementById("del");
    del.addEventListener("click" , () => {
        currentValue = currentValue.slice(0 ,-1)
        result.innerText = currentValue
    })

    const enter = document.getElementById("enter");
    enter.addEventListener("click" , () => {
        result.innerText = currentValue;
    })
    
}