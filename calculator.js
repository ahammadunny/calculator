var result = document.querySelector(".display");
    var btns = document.querySelector(".buttons");
    var ops = document.querySelectorAll(".operator");
    var tempop;
    var clearResult = false;
    var num1 ="";
    var num2 ="";
    var op;
    var operate= false;
  //  window.addEventListener("DOMContentLoaded", (event) => {
    btns.addEventListener("click",function(e){
        var resultValue = result.innerHTML;
        var btn = e.target;

            if(btn.classList.contains("clear")){
                result.innerHTML = "0";
                resultValue= "";
                operate= false;
                num1="";
                num2= "";
                return;
            }
    
            if(btn.classList.contains("back")) {
     if(!operate) {
        num1= num1.slice(0,num1.length-1);
        result.innerHTML=num1;
     }
      else if(operate) {
        num2= num2.slice(0,num2.length-1);
        result.innerHTML=num2;
        
      }
    };

    if(btn.classList.contains("dot")) {
        if((!operate)&&(result.innerHTML.indexOf(".") >=0)) {
           // num1= num1.slice(0,num1.length-1);
          //  result.innerHTML=num1;  
              return; 
        }
        if((operate)&&(result.innerHTML.indexOf(".") >=0)) {
           // num2= num2.slice(0,num2.length-1);
          //  result.innerHTML=num2;  
              return; 
        }
    }

    if(btn.classList.contains("number")) {
      
       if((!operate) && (!btn.classList.contains("back"))) { num1 += btn.innerHTML;
       result.innerHTML= num1;
        }
       else  if ((operate) && (!btn.classList.contains("back"))){
        num2 += btn.innerHTML;
        result.innerHTML=num2;
    }
    
}
    else {
        

        op = tempop;
        tempop=btn.innerHTML;
        btn.classList.add("doubleBordered"); 

    if(num1 && num2) {
        num1=calculate(num1,num2,op);
        result.innerHTML=num1;

         num2="";
    }

       operate= true;

    }
})
 //})

function calculate(num1,num2,op){
        switch (op) {
            case "+":
                return parseFloat(num1) + parseFloat(num2);
            case "-":
                return parseFloat(num1) - parseFloat(num2);
            case "X":
                return (parseFloat(num1) * parseFloat(num2)).toFixed(3);
            case "/":
                return (parseFloat(num1) / parseFloat(num2)).toFixed(3);

        }
    }
