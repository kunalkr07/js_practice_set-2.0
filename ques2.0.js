

function multiply(){
    let num1=document.querySelector('#first').value;
    console.log(num1)
    let num2=document.querySelector('#second').value;
    console.log(num2)

    const result=document.getElementById('show');
    result.innerHTML=num1*num2;
}

function divide(){
    let num1=document.querySelector('#first').value;
    console.log(num1)
    let num2=document.querySelector('#second').value;
    console.log(num2)

    const result=document.getElementById('show');
    result.innerHTML=num1/num2;
}
