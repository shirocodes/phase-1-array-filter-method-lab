const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, string) {
    const stringMatches = array.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase()
    });
    return stringMatches;
}
// function fuzzyMatch(array, letters) {
//     const matchingLetters = array.filter(function(driver) {
//         return driver.startsWith(letters);
//     })
//     return matchingLetters;
// }

const fuzzyMatch = (array, letters) => array.filter(driver => driver.startsWith(letters));

function matchName(driverObj, searchName) {
    const matches = driverObj.filter(function(driver) {
        return driver.name === searchName;
    })
    return matches;
}
