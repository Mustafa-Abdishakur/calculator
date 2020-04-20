
const display = document.querySelector('.display span');

/* Calcuations*/
let numArr1=[];
let numArr2=[];
let firstNum, secondNum, finalNum;
let operator;

//get the numbers and operator
document.querySelector('.btns-container').addEventListener('click', (event) => {

    const el = event.target.textContent;
//get the first number (more sure to consider 2 and more digit numbers)
if(el!=='='){
    if(!(isNaN(el))){
        if(operator===undefined){
        //first number
        numArr1.push(el);
        firstNum = numArr1.join('');
        display.textContent = firstNum;
        }else{
        //second number
        numArr2.push(el);
        secondNum = numArr2.join(''); 
        display.textContent = secondNum;
        }

//get the operator
    }else{
    
            if(el==='Clear'){
                reset();                
            }else if(el==='x'){
                operator = '*';
            }else{
                operator = el;
            }  
        display.textContent = operator;

    }

    
}


});
//perform the operation
document.querySelector('.result').addEventListener('click', ()=>{
    finalNum = eval(firstNum + operator + secondNum);
    display.textContent = finalNum;

    reset();


});
function reset(){
    firstNum = 0;
    secondNum = 0;
    numArr1 = [];
    numArr2 = [];
    operator = undefined;

}