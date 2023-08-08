// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let arr = [];
  let temp = "true";
  for (let i = 2; i <= n / 2; i++) {
    temp = "true";
    if (n % i === 0) {
      if (i === 2 || i === 3) {
        arr.push(i);
        continue;
      } else {
        for (let k = 2; k <= i / 2; k++) {
          // check1
          if (i % k === 0) {
            temp = "false";
            break;
          }
        }
      }
      if (temp === "true") {
        // check2
        arr.push(i);
      }
    }
  }
  if (arr.length === 0) {
    arr.push(n);
  }
  return arr;
}

// n의 배수 중 소수가 소인수이다.
// check1 :: 예를 들어 i가 35일때 if문을 통해 한번이라도 i % k === 0 이 성립된다면 다음 i로 넘어간다
// check2 :: check1에의해 i % k === 0 이 성립이 한번도 안됐다면 그 수는 소수이므로 arr에 추가.

// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(my_str, n) {
  let answer = [];
  let cycle = 1;
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, n * cycle));
    cycle += 1;
  }
  return answer;
}

// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요

function solution(numbers, k) {
  let order = 1;
  for (let i = 1; i <= k - 1; i++) {
    // check1
    order += 2;
  }
  let length = numbers.length;
  let answer = order % length === 0 ? length : order % length; // check2
  return answer;
}

// k번쨰로 던질사람? ==> 2번째로 던질사람은 첫번째로 던질사람 + 2
// check1 :: 변수 order k번째로 던진사람을 의미하는데, 초기값을 1로 줬을때 범위를 k-1으로 하지 않으면 k=2일때 order는 3번째로 던질 사람의 의미하게 된다.
// check2 :: order에서 numbers.length을 나눈 몫을 구하면 numbers란 배열에서의 던질사람의 순서를 알 수 있다. 다만 order === length일때 number란 배열에서의 순서는 배열의 길이와 동일하다

// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  console.log(my_str, n);
  let arr = [];
  let temp = "";
  for (let i in my_str) {
    let index = my_str[i];
    if (temp.length === n) {
      arr.push(temp);
      temp = "";
    }
    temp += index;
  }
  if (temp.length !== 0) {
    arr.push(temp);
  }
  return arr;
}

// function solution(my_str, n) {
//     let res = [];
//     for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
//     return res;
// }
