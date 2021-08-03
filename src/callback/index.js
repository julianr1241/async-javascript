function sum(num1,num2)
{
    return num1+num2;
}
function calc(num1,num2,callback)
{
    return callback(num1,num2);
}
console.log(calc(2,2,sum));
function date(callback)
{
    console.log(new Date); //Primero llama esta
    setTimeout(function(){ //Espera 3 segundos y baja esta
        let date=new Date;
        callback(date);

    },3000)
}
function printDate(dateNow)
{
    console.log(dateNow);
}
date(printDate);