// 하샤드 수

function solution(x) {
  let arr = [...String(x)];
  let sum = 0;
  for (let el of arr) {
    sum += +String(el);
  }
  let answer = x % sum;
  return answer === 0 ? true : false;
}

// 두 정수 사이의 합

function solution(a, b) {
  let i = Math.min(a, b);
  let sum = 0;
  while (i <= Math.max(a, b)) {
    sum += i;
    i++;
  }
  return sum;
}

//콜라츠 추측

function solution(num) {
  let Collatz = num;
  let count = 0;
  while (Collatz !== 1) {
    if (Collatz % 2 === 0) Collatz = Collatz / 2;
    else Collatz = Collatz * 3 + 1;
    count++;
  }
  if (count > 500) return -1;
  else return count;
}
