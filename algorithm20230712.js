// 1. 최대값 만들기(1)
function solution(numbers) {
  let best1 = Math.max(...numbers);
  let index = numbers.indexOf(best1);
  numbers.splice(index, 1);
  let best2 = Math.max(...numbers);
  let answer = best1 * best2;
  return answer;
}

// 2. 피자 나눠 먹기(1)
function solution(n) {
  var answer = 0;
  if (n % 7 === 0) {
    answer = n / 7;
  } else if (n % 7 !== 0) {
    answer = Math.floor(n / 7) + 1;
  }
  return answer;
}

// 3. 순서쌍의 개수
function solution(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      array.push(i);
    }
  }
  var answer = array.length;
  return answer;
}
// 두수의 곱이 n인 순서쌍 === n의 약수

// 4. 삼각형의 완성조건(1)
function solution(sides) {
  var answer = 0;
  let array = sides.sort((a, b) => b - a);
  if (array[0] < array[1] + array[2]) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}
// sort
// a-b의
// return값 < 0 (=> a가 b보다 앞에 있어야한다.)
// return값 = 0 (=> a와 b의 순서를 바꾸지 않는다.)
// return값 > 0 (=> b가 a보다 앞에 있어야한다.)

// 5. 머쓱이보다 키 큰 사람
function solution(array, height) {
  let array2 = array.filter((el) => el > height);
  var answer = array2.length;
  return answer;
}

// 6. 배열 원소의 길이
function solution(strlist) {
  let array = [];
  for (let i = 0; i <= strlist.length - 1; i++) {
    array.push(strlist[i].length);
  }
  return array;
}

// 7. 문자열 뒤집기
function solution(my_string) {
  var answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}
// str[index]을 통해 배열에 접근하듯이 문자열 뒤 대괄호에 index값을 넣어서 index에 해당하는 문자를 반환한다.
// 문자열의 맨 뒤 부터 반복해야 하기 때문에, i를 문자열-1(문자의 마지막 인덱스)부터 시작하여 -1씩 빼줘서 반복한다
// 인덱스의 시작은 0이므로 0에서 반복이 멈출 수 있도록 설정한다.
// 문자열의 뒤부터 반복하여 하나씩 더해준다.

// 8. 중복된 숫자 개수
function solution(array, n) {
  let array2 = array.filter((el) => el === n);
  let answer = array2.length;
  return answer;
}

// 9. 피자 나눠 먹기(3)
function solution(slice, n) {
  console.log(slice, n);
  let answer = n % slice === 0 ? n / slice : Math.floor(n / slice) + 1;
  return answer;
}

// 10. 특정 문자 제거하기
function solution(my_string, letter) {
  const a = my_string.split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] == letter) {
      a.splice(i, 1);
      i--;
    }
  }
  return a.join("");
}
