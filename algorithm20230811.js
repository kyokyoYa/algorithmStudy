// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let a = []; // 합성수를 모을 배열을 만든다
  for (let i = 2; i <= n; i++) {
    // 1은 모든 수의 약수니까 제외, 2부터 시작
    for (let k = 2; k <= parseInt(n / i); k++) {
      // 모든 수는 자신을 약수로 가지고 있으니까 제외(*1은 자신이 됨) 2부터 시작, n안에 i가 몇개 들어 갈 수있는지 === i의 배수                                                  가 최대 몇개 인지 확인하기 위해 n을 i로 나눈 몫을 확인한다.
      a.push(i * k);
    }
  }
  let set = new Set(a); // new Set을 통해 중복되는 수를 제거 // Set은 집합으로 만들어주는 메소드인데 집합은 같은 수를 포함 할 수 없다.
  return set.size; // 집합의 길이 구하기
}

// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(order) {
  let str1 = order.toString();
  let array = [...str1];
  let num = ["3", "6", "9"];
  let answer = array.filter((el) => num.includes(el)).length;

  return answer;
}

// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(num, k) {
  console.log(num, k);
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === k.toString()) {
      return i + 1; // 자리수는 인덱스 번호 + 1
    }
  }
  return -1;
}
