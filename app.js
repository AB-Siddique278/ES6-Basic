document.getElementById('button').addEventListener('click',function(){
    const depositinput = document.getElementById('input');
    const depotext = depositinput.value;
    const depositAmount = parseFloat(depotext);


    const depototal = document.getElementById('add-monnay');
    const depomoneyText = depototal.innerText;
    const previousDepo = parseFloat(depomoneyText);
    depototal.innerText=depositAmount+previousDepo
    depositinput.value='';
   

   



})