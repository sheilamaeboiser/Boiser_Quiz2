let button = document.getElementById('button');
button.addEventListener('click', calc);

function calc(){
    
    let operator = document.getElementById("Operator").value;
    let Num1 = document.getElementById("Num1").value;
    let Num2 = document.getElementById("Num2").value;

    Num1 = Number(Num1);
    Num2 = Number(Num2);

    let answer = document.getElementById("Answer");

    switch (operator){
        case '+':
            answer.innerHTML = Num1 + Num2;
            break;
        case '-':
            answer.innerHTML = Num1- Num2;
            break;
        case '/':
            answer.innerHTML = Num1 / Num2;
            break;
        case '*':
            answer.innerHTML = Num1 * Num2;
            break;
        default:
            answer.innerHTML = "Error";

    }
}