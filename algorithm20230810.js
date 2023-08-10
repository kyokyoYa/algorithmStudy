// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
  const num_alphabet = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let num_str = "";
  let temp = "";
  for (let index of numbers) {
    temp += index;
    if (num_alphabet.includes(temp)) {
      switch (temp) {
        case (temp = "zero"):
          num_str += "0";
          temp = "";
          break;
        case (temp = "one"):
          num_str += "1";
          temp = "";
          break;
        case (temp = "two"):
          num_str += "2";
          temp = "";
          break;
        case (temp = "three"):
          num_str += "3";
          temp = "";
          break;
        case (temp = "four"):
          num_str += "4";
          temp = "";
          break;
        case (temp = "five"):
          num_str += "5";
          temp = "";
          break;
        case (temp = "six"):
          num_str += "6";
          temp = "";
          break;
        case (temp = "seven"):
          num_str += "7";
          temp = "";
          break;
        case (temp = "eight"):
          num_str += "8";
          temp = "";
          break;
        case (temp = "nine"):
          num_str += "9";
          temp = "";
          break;
      }
    }
  }
  return Number(num_str);
}

// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요
// 제한사항
// 연산자는 +, -만 존재합니다.
// 문자열의 시작과 끝에는 공백이 없습니다.
// 0으로 시작하는 숫자는 주어지지 않습니다.
// 잘못된 수식은 주어지지 않습니다.
// 5 ≤ my_string의 길이 ≤ 100
// my_string을 계산한 결과값은 1 이상 100,000 이하입니다.
// my_string의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
// 계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다.
// my_string에는 연산자가 적어도 하나 포함되어 있습니다.
// return type 은 정수형입니다.
// my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.

function solution(my_string) {
  let calculate = my_string.split(" ");
  let answer = 0;
  for (let i = 0; i <= calculate.length - 1; i++) {
    if (calculate[i] === "+") {
      continue;
    } else if (calculate[i] === "-") {
      calculate[i + 1] = "-" + calculate[i + 1];
      continue;
    }
    answer += Number(calculate[i]);
  }
  return answer;
}

// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  let sides_sort = sides.sort((a, b) => a - b);
  let answer = 0;
  for (let i = sides[1] - sides[0] + 1; i < sides[1] + sides[0]; i++) {
    answer++;
  }
  return answer;
}

// 두변의 길이가 3,6 일 때 나머지 한 변을 x로 하자
// 6이 가장 긴변 ==> 3 + x < 6 ==> x < 3
// 나머지 한 변이 가장 긴변 ==> x < 3 + 6
// x의 범위는 3 < x < 6

// check 1 :: 오름차순으로 정렬하면 주어진 두 변을 더했을 때 양수가 나올 수 있다.

// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
  let target = spell.sort().join("");
  let answer = 2;
  let spell_filter = dic.forEach((index) => {
    if (index.split("").sort().join("") === target) {
      answer = 1;
    }
  });
  return answer;
}
