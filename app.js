document.getElementById("loan-form").addEventListener("submit" , function(e){

    document.getElementById('loading').style.display = 'block' ;
    document.getElementById('results').style.display = 'none' ;
    setTimeout( calculateResults, 2000);

    e.preventDefault();
});

function calculateResults(){
    const amount = document.getElementById("amountt");
    const interest = document.getElementById("interestt");
    const years = document.getElementById("yearss");
    const monthlyPayment = document.getElementById("monthly-Payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest= document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calIntst = parseFloat(interest.value)/100/12;
    const calPay = parseFloat(years.value)*12 ;

    
    const x = Math.pow(1 + calIntst , calPay);
    const monthly = (principal*x*calIntst)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value= (monthly*calPay).toFixed(2);
        totalInterest.value = ((monthly*calPay)- principal).toFixed(2);
        document.getElementById('loading').style.display = 'none' ;
        document.getElementById('results').style.display = 'block' ;
    }
    else{
        showError("plz check your numbers!");
    }
    
}

 function showError(error){
    document.getElementById('loading').style.display = 'none' ;
    document.getElementById('results').style.display = 'none' ;

     const errorDiv = document.createElement('div');
     errorDiv.className = "alert alert-danger" ;

     errorDiv.appendChild(document.createTextNode(error));

     const cardd = document.querySelector('.card');
     const headingg = document.querySelector('.heading');

     cardd.insertBefore(errorDiv , headingg);

     setTimeout(clearError , 3000);

     


 }

 function clearError(){
     document.querySelector('.alert').remove();
 }