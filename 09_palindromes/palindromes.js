const palindromes = function (x) {
    x = x.toLowerCase();
    let xarr = x.split("");
    let remove = [',',' ','!','.'];
    let filterarr = xarr.filter((element)=>{
        if(remove.includes(element)){return false ;}
        return true ; 
    });
    for (let z=0;z<=(Math.floor(filterarr.length/2));++z){
        if (filterarr[z] != filterarr[filterarr.length-1-z]){return false;}
    }
    return true ; 
};

// Do not edit below this line
module.exports = palindromes;
