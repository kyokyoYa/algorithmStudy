// 없는 숫자 더하기

function solution(numbers) {
  let answer = 0;
  let i = 0;
  while (i < 10) {
    if (!numbers.includes(i)) {
      answer += i;
    }
    i++;
  }
  return answer;
}

// 제일 작은 수 제거하기

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length === 0 ? [-1] : arr;
}

// 가운데 글자 가져오기

function solution(s) {
  let half = s.length / 2;
  let sniffling = s.length % 2; // 홀짝 구분
  return !sniffling ? s[half - 1] + s[half] : s[Math.floor(half)];
}

// !sniffling index는 0부터 시작하므로 -1
// sniffling 배열의 길이가 홀수일때, / 2 를 해주면 x.5가 나온다. 그 뒤 소수를 버려준다.
// -1을 하지 않는 이유는 인덱스 기준으로, 위의 값 +1을 해줘야하는데 배열의 길이는 1부터 시작이므로 인덱스 기준 +1한 값.

// 수박

function solution(n) {
  let answer = "";
  let i = 1;
  while (answer.length < n) {
    if (i % 2 === 1) answer += "수";
    else answer += "박";
    i++;
  }
  return answer;
}

// 내적

function solution(a, b) {
  let answer = 0;
  let i = 0;
  while (i <= a.length - 1) {
    sum += a[i] * b[i];
    i++;
  }
  return answer;
}
