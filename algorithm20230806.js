// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
    let delete_gap = s.split(" ")
    let answer = 0
    for(let i in delete_gap){
        if(delete_gap[i] === "Z"){
            answer -= parseInt(delete_gap[i-1])
            continue;
        }
        answer += parseInt(delete_gap[i])
    }
    return answer
}

// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2) {
    let sum = Number(bin1) + Number(bin2)
    let array = [...String(sum)]
    let flag = 0
    let answer = ""
    
    for(let i=array.length-1; i>=0; i--){
        let num = Number(array[i])
        if(flag === 1){
            num += 1
        }
        if(num === 2){
            answer = "0" + answer
            flag = 1
        } else if (num === 3) {
            answer = "1" + answer
            flag = 1
        } else {
            answer = String(num) + answer
            flag = 0
        }
    }
    if(flag === 1){
        answer = "1" + answer
    }
    return answer
}

//function solution(bin1, bin2) {
//     let ten = parseInt(bin1,2) + parseInt(bin2,2)
//     var answer = ten.toString(2)
//     return answer;
//}


// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
    console.log(s)
    let arr = []
    let temp = []
    for(let i in s){
        let index = s[i]
        if (!arr.includes(index)){
            arr.push(index)
        } else {
            temp.push(index)
        }
    }
    let new_arr = arr.filter(el => !temp.includes(el))
    let answer = new_arr.sort().join("")
    return answer
}


// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let temp = ""
    let answer = 0
    for(let i in my_string){
        let index = my_string[i]
        if(!isNaN(index)){
            temp +=index
        } else {
            answer += Number(temp)
            temp = ""
        }
    }
    if (temp !== ""){
        answer += Number(temp)
    }
    return answer
}
