const removeFromArray = function(primary,...arr) {

            for (x of arr){
                if (primary.includes(x)){
                    primary.splice(primary.indexOf(x),1);
                }
            }
            return primary;

    }

// Do not edit below this line
module.exports = removeFromArray;
