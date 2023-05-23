const fibonacci = function(numis) {
    let num = Number(numis);
    if (num < 0) return "OOPS";
    if (num ==1) return 1;
    if (num ==2 ) return 1;
    let num1 = 1;
    let num2 = 1; 
    let value = 2;
    let temp = 0 ;
    for (let x=0; x<=num-3 ; ++x){
            temp = value ; 
            value = num1 + num2 ; 
            num1 = num2 ; 
            num2 = value ; 

    }
    return value ;

};

// Do not edit below this line
module.exports = fibonacci;
