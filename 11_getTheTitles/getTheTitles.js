const getTheTitles = function(obj) {
    let arr = [];
    obj.forEach(element => {
        arr.push(element.title); 
    });
    return arr;

};

// Do not edit below this line
module.exports = getTheTitles;
