function tempConvert(){
    const inputNumber = document.getElementById("degree").value;
   
    const convertFrom  = document.getElementById("convert").value;
    
    const convertTo = document.getElementById("convertTo").value;
     let result;

    if(isNaN(inputNumber)){
        document.getElementById("result").innerHTML = "Please enter the valid input"
    }

    if(convertFrom === convertTo){
        alert("Both values cannot be same");
    }

    switch (convertFrom) {
        case 'celsius':   
            switch (convertTo){
                case 'fahrenheit' :
                    result = (inputNumber * 9/5) + 32;
                    break; 
                case 'kelvin' : 
                    result = inputNumber + 273.15; 
                    break;
                default :
                    result = inputNumber;
                    break  

            }
         break;
        
        case 'fahrenheit' :
           switch (convertTo){
              case 'celsius' :
                result = (inputNumber - 32) * 5/9;
                break; 
              case 'kelvin' : 
                result = (inputNumber - 32) * 5/9 + 273.15;
                break;
              default :
                result = inputNumber;
                break  

            }
        break;

        case 'kelvin' :
           switch (convertTo){
              case 'celsius' :
                result = inputNumber - 273.15;
                break; 
              case 'fahrenheit' : 
                result = (inputNumber - 273.15) * 9/5 + 32;
                break;
              default :
                result = inputNumber;
                break  

            }
    }

    document.getElementById("result").innerHTML = `${inputNumber} ${convertFrom.charAt(0).toUpperCase() + convertFrom.slice(1)}
    = ${result.toFixed(2)} ${convertTo.charAt(0).toUpperCase() + convertTo.slice(1)}`

}