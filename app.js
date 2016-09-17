var input1;
var input2;
var symbol;
var result;
console.log("Enter First Value");
input1= parseInt(prompt(input1));

console.log("Enter Operand to calculate two inputs");
symbol=prompt(symbol);

console.log("Enter Second Value");
input2=parseInt(prompt(input2));

if(symbol=='+')
{
    console.log("Your Operand is Plus");
    result = input1 + input2 ;
    console.log("The sum of "+input1+" and "+input2+" is "+ result) ;
}
else if(symbol=='-')
{
    console.log("Your operand is Subtract");
    result = input1 - input2 ;
    console.log("The Subtract of "+input1+" and "+input2+" is "+result) ;

}
else if(symbol=='*')
{
    console.log("Your operand is Multiply");
     result = input1 * input2 ;
    console.log("The Multiply of "+input1+" and "+input2+" is "+result) ;
}
else if(symbol=='/')
{
     console.log("Your operand is Divide");
      result = input1 / input2 ;
    console.log("The Division of "+input1+" and "+input2+" is "+result) ;
}
else
{
    console.log("Plz use The Arithemtic operators like: + ,  - , * , /");
}



