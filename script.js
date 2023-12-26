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
     const depositNumber = getInputNumber('depositAmount');

   
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

 //Withdraw button event handler
 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener('click',function(){
    const withdrawNumber = getInputNumber('withdrawAmounts');
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance',-1*withdrawNumber);
    document.getElementById('withdrawAmounts').value = "";
 });

 function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
 }
