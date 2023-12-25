 //Login button Event handler
 const loginBtn = document.getElementById('loginButton');
 loginBtn.addEventListener('click',function(){
     const loginAreas = document.getElementById('loginArea');
     loginAreas.style.display = 'none';

     const transactionAreas = document.getElementById('transactionArea');
     transactionAreas.style.display = 'block';
 });

 //Deposit button Event handler
 const depositBtn = document.getElementById('addDeposit');
 depositBtn.addEventListener('click',function(){
     const depositAmounts = document.getElementById('depositAmount').value;
     const depositNumber = parseFloat(depositAmounts);

   
     updateSpanText('currentDeposit',depositNumber);
     updateSpanText('currentBalance',depositNumber);

     document.getElementById('depositAmount').value = "";

 });


 function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const total = depositNumber+currentNumber;  
     document.getElementById(id).innerText = total;

 }