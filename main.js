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


function calculate(e) {
    console.log("Running calc")
    let sum = 0;
    let tax = 0;

    const add_inputs = document.querySelectorAll(".add [name='qty']");

    add_inputs.forEach(function(input){
        sum = sum + parseFloat(input.value);
    });

    const subtraction_inputs = document.querySelectorAll(".subtract [name='qty']");

    subtraction_inputs.forEach(function(input){
        sum = sum - parseFloat(input.value);
    });
    

    if(sum >= 5300){
        tax = sum * 0.025;
    }

    console.log("Sum", sum);
    console.log("Tax", tax);

    document.querySelector(".totalincome").querySelector("input").value = sum;
    document.querySelector(".zakat").querySelector("input").value = tax;

}

 //need to add all the income values, subtract the deductables,
 const inputs = document.querySelectorAll("[name='qty']");
 
 inputs.forEach(function(input){
     input.addEventListener("change", calculate);
 });
