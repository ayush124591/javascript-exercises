const add = function(x,y) {
  return x+y;
	
};

const subtract = function(x,y) {
  if (x>y) return x-y ;
  return y-x;	
};

const sum = function(arr) {
  returnvalue = 0 ;
  for (let x=0;x<arr.length;++x){
    returnvalue += arr[x];

  }
  return returnvalue;

	
};

const multiply = function(arr) {
  returnvalue = 1 ;
  for (let x=0;x<arr.length;++x){
    if (arr[x] != 0) {
    returnvalue *= arr[x];
    }
  }
  return returnvalue;

};

const power = function(x,y) {
  return x**y;
	
};

const factorial = function(num) {
  let value  = 1; 
  if (num==0){return 1 ;}
  for (let x=1 ; x<=num ; ++x){
    value *= x ;
  }
  return value ; 
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
