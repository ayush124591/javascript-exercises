const findTheOldest = function(people) {
    let age = people.map(element => {
        if (element.yearOfDeath == undefined) return 1000;
        let  elementage = element.yearOfDeath-element.yearOfBirth;     
        return elementage ; 
    });
    let agecopy = [...age];
    age = age.sort(function(a,b){return a-b});
    let index = agecopy.indexOf(age[age.length-1]);
    return people[1];
}

// Do not edit below this line
module.exports = findTheOldest;
