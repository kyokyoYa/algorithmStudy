// 옷가게 할인 받기
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요

function solution(price) {
  switch (true) {
    case price >= 500000:
      return price - parseInt(price * 0.2);
    case price >= 300000:
      return price - parseInt(price * 0.1);
    case price >= 100000:
      return price - parseInt(price * 0.05);
  }
}

// 자릿수 더하기
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  let array = [...String(n)];
  var answer = 0;
  for (let i in array) {
    answer += parseInt(array[i]);
  }
  return answer;
}

// 중앙값 구하기
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  console.log(array);
  let array2 = array.sort((a, b) => a - b);
  var answer = array2[parseInt(array2.length / 2)];
  return answer;
}

// 문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, n) {
  var answer = "";
  for (var i = 0; i < my_string.length; i++) {
    for (var k = 0; k < n; k++) {
      answer += my_string[i];
    }
  }
  return answer;
}

// 배열 두배 만들기
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = numbers.map((el) => el * 2);
  return answer;
}

// 숨어있는 숫자의 덧셈 (1)
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  var answer = 0;
  let array1 = [...my_string];
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let array2 = array1.filter((el) => number.includes(el));
  for (let i in array2) {
    answer += Number(array2[i]);
  }
  return answer;
}

// 짝수는 싫어요
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}

// 문자열안에 문자열
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  var answer = 0;
  if (str1.includes(str2)) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}

// 공배수
// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution(number, n, m) {
  var answer = 0;
  if (number % n === 0 && number % m === 0) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

// 수 조작하기 1
// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

function solution(n, control) {
  var answer = n;
  let array = [...control];
  for (let i in array) {
    if (array[i] === "w") {
      answer += 1;
    } else if (array[i] === "s") {
      answer -= 1;
    } else if (array[i] === "d") {
      answer += 10;
    } else if (array[i] === "a") {
      answer -= 10;
    }
  }
  return answer;
}
