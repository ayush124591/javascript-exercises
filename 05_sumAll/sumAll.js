const sumAll = function(x,y) {
    let small = big = 0 ;
    if(typeof x === 'number' && typeof y === 'number' &&
       parseInt(x)===x && parseInt(y)===y && x>=0 && y>=0){
            if(x>y){
                small=y;
                big=x;
            }else {
                small=x;
                big = y;
            }
            for ( i=0;small<=big;++small){
                i += small;

            }
            return i ;
       }
    return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
