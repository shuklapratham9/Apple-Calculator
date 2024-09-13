let buttons=document.querySelectorAll("button");
let input=document.querySelector("input");

for(let button of buttons){
    button.addEventListener('click',(event)=>{
        let button_text=event.target.innerText;
        if(button_text==="C"){
            input.value="";
        }
        else if(button_text==="="){
            try{
                input.value=eval(input.value);
                setTimeout(()=>{
                    input.value="";
                },10000);
            }
            catch(e){
                input.value="Invalid Input"; 
                setTimeout(()=>{
                    input.value="";
                },10000);
            }
        }
        else{
        input.value=input.value+button_text;
    }
  
    })
   
}
