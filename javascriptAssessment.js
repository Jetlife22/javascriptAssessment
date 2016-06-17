//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1") 
event1.addEventListener('click',myfirst, false);

function myfirst()
{
    //USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userInput1 = parseInt(document.getElementById("salaryInput").value);
var allow11k = 11000;

/*
var incomeAfter11k = userInput1 - 11000;
var taxAtTwenty= incomeAfter11k *= 0.2;
var taxMinusInc11 = taxAtTwenty - incomeAfter11k;
var netIncome = taxMinusInc11 + 11000;

    
document.getElementById("grossSalary").innerHTML = "Gross Salary is " + userInput1;
document.getElementById("allowance").innerHTML = "Allowance is 11,000";
document.getElementById("taxAt20").innerHTML = "Tax deducted " + taxAtTwenty;
document.getElementById("taxAt40").innerHTML = userInput1;
document.getElementById("net").innerHTML = netIncome;
*/
    
    if (userInput1 > 43000)
    {
        
        
        var incomeAfter11k = userInput1 - 11000;
        var inBetweenTaxesRange = 32000;
        var incomeafter32k = incomeAfter11k - 32000;
        var taxAtTwenty= inBetweenTaxesRange *= 0.2;
        var taxAtForty= incomeafter32k *= 0.4;
        var net = userInput1 - taxAtForty - taxAtTwenty;
        document.getElementById("grossSalary").innerHTML = "Gross Salary is " + "&pound"+ userInput1;
        document.getElementById("allowance").innerHTML = "Allowance is " + "&pound" + "11000";
        document.getElementById("taxAt20").innerHTML = "Tax deducted " + "&pound"+ taxAtTwenty;
        document.getElementById("taxAt40").innerHTML = "Tax deducted "+ "&pound" + taxAtForty;
        document.getElementById("net").innerHTML = "Total Net Income " + "&pound"+ net;
        

        
    }
    
        else if (43000 > userInput1 )
    {
        var incomeAfter11k = userInput1 - 11000;
        var taxAtTwenty= incomeAfter11k *= 0.2;
        var net = userInput1 - taxAtTwenty;
        document.getElementById("grossSalary").innerHTML = "Gross Salary is " + "&pound"+ userInput1;
        document.getElementById("allowance").innerHTML = "Allowance is 11,000";
        document.getElementById("taxAt20").innerHTML = "Tax deducted "+ "&pound" + taxAtTwenty;
        document.getElementById("taxAt40").innerHTML = "Tax deducted "+ "&pound" + 0;
        document.getElementById("net").innerHTML = "Total Net Income " + "&pound"+ net;
        

    }



}

        $(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn("slow");
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn("slow");
    });
});
  


