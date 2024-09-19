/**
 * array has some duplicate element
 * []
 */


const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 86, 7, 5, 81, 61];


function noDuplicate(array) {
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);