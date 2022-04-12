   
function round_number(num) {
    //first, move the decimal two places
    num = num * 100;
  
    //then, round the number to the nearest integer
    num = Math.round(num);
  
    //then move the decimal back two places
    num = num / 100;
  
    // handle trailing zeroes
    num = num.toFixed(2);
  
    return num;
  }
 // i was trying to use that to get the values to be in dollar form?


 //need to add all the income values, subtract the deductables, and then multiply that value by 0.025  

function calculate() {

    getValue("totalincome") 

    class totalincome = (cash+bankbalance+stocks+investment+other)-subtract;

}
