//Voltage and current

function calculatePower(voltage, current) {
    let power = voltage * current;
    return power;
}





//find max number

function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }else{
        let sortedNumbers = numbers.sort((a, b) => b - a);
        let maxNumber = sortedNumbers[0];

        return maxNumber;
    }    
}




//Marged array
function mergeArrays(array1, array2) {
    let mergedArray = [...array1, ...array2];
    return mergedArray;
}




//Array value type
function arrayValuesTypes(arr) {
    return arr.map(item => typeof item);
}
