// document.querySelector('#btn7').onclick = btn7;
// function btn7(){
//     val7 = document.querySelector('#btn7').value;
//     document.querySelector('.display').innerHTML += val7;
// }

// document.querySelector('#btn8').onclick = btn8;
// function btn8(){
//     val8 = document.querySelector('#btn8').value;
//     document.querySelector('.display').innerHTML += val8;
// }
// for(let i = 0; i < 10; i++){
//     document.querySelector('.result').innerHTML += `
//                 document.querySelector("#btn${i}").onclick = btn${i};<br>
//                 function btn${i}(){<br>
//                     val${i} = document.querySelector('#btn${i}').value;<br>
//                     document.querySelector('.display').innerHTML += val${i};<br>
//                 }<br><br>`
// }


//Default Value for Diplay part
display = document.querySelector('.display').value;


document.querySelector("#btn0").onclick = btn0;
function btn0(){
val0 = document.querySelector('#btn0').value;
    display = document.querySelector('.display').innerHTML += val0;
}

document.querySelector("#btn1").onclick = btn1;
function btn1(){
val1 = document.querySelector('#btn1').value;
display =document.querySelector('.display').innerHTML += val1;
}

document.querySelector("#btn2").onclick = btn2;
function btn2(){
val2 = document.querySelector('#btn2').value;
display = document.querySelector('.display').innerHTML += val2;
}

document.querySelector("#btn3").onclick = btn3;
function btn3(){
val3 = document.querySelector('#btn3').value;
display = document.querySelector('.display').innerHTML += val3;
}

document.querySelector("#btn4").onclick = btn4;
function btn4(){
val4 = document.querySelector('#btn4').value;
display = document.querySelector('.display').innerHTML += val4;
}

document.querySelector("#btn5").onclick = btn5;
function btn5(){
val5 = document.querySelector('#btn5').value;
display = document.querySelector('.display').innerHTML += val5;
}

document.querySelector("#btn6").onclick = btn6;
function btn6(){
val6 = document.querySelector('#btn6').value;
display = document.querySelector('.display').innerHTML += val6;
}

document.querySelector("#btn7").onclick = btn7;
function btn7(){
val7 = document.querySelector('#btn7').value;
display = document.querySelector('.display').innerHTML += val7;
}

document.querySelector("#btn8").onclick = btn8;
function btn8(){
val8 = document.querySelector('#btn8').value;
display = document.querySelector('.display').innerHTML += val8;
}

document.querySelector("#btn9").onclick = btn9;
function btn9(){
val9 = document.querySelector('#btn9').value;
display = document.querySelector('.display').innerHTML += val9;
}

document.querySelector("#btnAC").onclick = btnAC;
function btnAC(){
    display = document.querySelector('.display').innerHTML = 0;
}

document.querySelector("#btnDel").onclick = btnDEL;
function btnDEL(){
   display = document.querySelector('.display').innerHTML = display.substring(0, display.length - 1);
}






// btnX
// btnDivide
// btnAdd
// btnMinus
// btnDot
// btnExp
// btnAns
// btnEqual

