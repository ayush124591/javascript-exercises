const repeatString = function(string,repeat) {
        if (repeat<0) return 'ERROR';
        value = '';
        for(let a=0;a<repeat;++a){
            value += string;
        }
        console.log(value);
        return value ;
};

// Do not edit below this line
module.exports = repeatString;
