// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = [];
  for (let el of arr) {
    if (el % divisor === 0) {
      answer.push(el);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b); // answer이 빈 배열이 아니라면 오름차순으로 정렬
}

// 음양 더하기
function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) sum += absolutes[i]; // truthy
    else sum -= absolutes[i];
  }
  return sum;
}

// 핸드폰 번호 가리기
function solution(phone_number) {
  let lsatIndex = phone_number.length; // phone_number의 마지막 인덱스
  let answer = phone_number.slice(lsatIndex - 4, lsatIndex);
  while (answer.length < phone_number.length) {
    answer = "*" + answer;
  }
  return answer;
}
