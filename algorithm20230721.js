// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

function solution(hp) {
  let a1 = Math.floor(hp / 5);
  let a2 = Math.floor((hp - a1 * 5) / 3);
  let a3 = hp - a1 * 5 - a2 * 3;
  console.log(a1, a2, a3);
  var answer = a1 + a2 + a3;
  return answer;
}

// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n, numlist) {
  var answer = [];
  for (let i in numlist) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let a = numbers.sort(function (a, b) {
    return b - a;
  });
  console.log(a);
  var answer =
    a[0] * a[1] > a[numbers.length - 1] * a[numbers.length - 2]
      ? a[0] * a[1]
      : a[numbers.length - 1] * a[numbers.length - 2];
  return answer;
}

// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let a1 = [...my_string];
  let a2 = a1.filter((el) => number.includes(el));
  let a3 = a2.map((el) => Number(el));
  var answer = a3.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
