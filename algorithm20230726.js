// 어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.

// 문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  var answer = 0;
  for (let i = 0; i <= str2.length - 1; i++) {
    let a = "";
    for (let j = i; j <= str1.length + i - 1; j++) {
      a += str2[j];
    }
    if (a === str1) {
      return 1;
    }
  }

  return 0;
}

// str2 문자열의 0번째 인덱스 부터 마지막 인덱스까지 str1의 길이만큼 돌림
// let j=i; j<=str1.length+i-1; j++ ==> ex)(str2의 길이가 3일떄) i가 2일때, j는 2부터 (3+2-1)(4)까지 즉 2 3 4 => str1의 길이만큼
// let a 가 for문 밖에 있을 경우 이중포문을 거치면서 나온 값이 나옴
// let a가 2번째 포문 밖에 있을 경우 두번째 포문을 거치면서 나온 값이 나옴

// indexOf 사용
// function solution(str1, str2) {
//     let a = str2.indexOf(str1)
//     return a != -1 ? 1 : 0
// }

// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  var answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }

  return answer;
}

// 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다. 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만, "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.

// 문자열 my_string과 target이 매개변수로 주어질 때, target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, target) {
  for (let i = 0; i < my_string.length; i++) {
    let a = "";
    for (let k = i; k < target.length + i; k++) {
      a += my_string[k];
    }
    if (a === target) {
      return 1;
    }
  }
  return 0;
}

// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

function solution(num_list) {
  var answer = 0;
  let a = "";
  for (let i in num_list) {
    if (parseInt(num_list[i]) < 0) {
      return num_list.indexOf(num_list[i]);
    }
  }
  return -1;
}

// //for문을 돌려 num_list[i]를 정수로 만들어준뒤 <0 보다 작은 수를 찾는다

// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

// slice()
// 자바스크립트의 slice 함수는 원본 배열은 유지하고 begin부터 end까지(end 미포함)의 새로운 배열 객체를 반환합니다.
// ex)
//console.log(numbers.slice(1, 4)); // index 1부터 index 4까지(index 4제외) 추출
// expected : [2, 3, 4];
