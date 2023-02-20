let zeroArr = [0, -5, 2, 3, 4, 5];

function addToZero(array){
let result = "false";

for(let i = 0; i < array.length; i++){
    for(let j = 1; j < array.length; j++){
        if(array[i] + array[j] === 0 && i !== j){
            result = "true";
        }
    }
}

console.log(result);
}

addToZero(zeroArr)