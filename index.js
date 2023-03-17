// Code your solution here
function findMatching(drivers, condition){
    return drivers.filter(e => e.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(drivers, condition){
    return drivers.filter(e => e.startsWith(condition));
}

function matchName(drivers, condition){
    return drivers.filter(e => e.name === condition);
}