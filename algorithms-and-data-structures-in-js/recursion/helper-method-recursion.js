let start = performance.now()
collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(performance.now() - start)

let start2 =performance.now()
collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(performance.now() - start2)

function collectOddValues(arr){

    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

function collectOddValues2(arr){
    let copyArr = [...arr]
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[helperInput.length -1] % 2 !== 0){
            result.push(helperInput[helperInput.length -1])
        }

        helperInput.pop()
        helper(helperInput)
    }

    helper(copyArr)

    return result;
}
