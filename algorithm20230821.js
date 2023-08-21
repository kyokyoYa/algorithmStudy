// 저주의 숫자 3

function solution(n) {
  let answer = n;
  for (let x = 1; x <= answer; x++) {
    if (x % 3 !== 0 && String(x).includes("3")) answer++;
    if (x % 3 === 0) answer++;
  }
  return answer;
}

// for문에서 3의 배수 일때
// x가 3의 배수가 아니면서 3을 포함할때(중복 + 방지)
// answer의 초기값은 n, answer에 +1

// 특이한 정렬

function solution(numlist, n) {
  let abs_sort_up = numlist.map((el) => Math.abs(el - n)).sort((a, b) => a - b);
  let numlist_sort_dowm = numlist.sort((a, b) => b - a); // 내림차순으로 정렬하면 절대값이 같을때, 크기가 큰 수가 앞으로 온다.
  let answer = [...abs_sort_up];
  for (let el of numlist_sort_dowm) {
    answer[abs_sort_up.indexOf(Math.abs(el - n))] = el;
    delete abs_sort_up[abs_sort_up.indexOf(Math.abs(el - n))];
  }
  return answer;
}

// console.log(abs_sort_up)
// console.log(el,Math.abs(el-n),abs_sort_up,answer)
// [ 0, 1, 1, 2, 2, 3 ]
// 6 2 [ 0, 1, 1, <1 empty item>, 2, 3 ] [ 0, 1, 1, 6, 2, 3 ]
// 5 1 [ 0, <1 empty item>, 1, <1 empty item>, 2, 3 ] [ 0, 5, 1, 6, 2, 3 ]
// 4 0 [ <2 empty items>, 1, <1 empty item>, 2, 3 ] [ 4, 5, 1, 6, 2, 3 ]
// 3 1 [ <4 empty items>, 2, 3 ] [ 4, 5, 3, 6, 2, 3 ]
// 2 2 [ <5 empty items>, 3 ] [ 4, 5, 3, 6, 2, 3 ]
// 1 3 [ <6 empty items> ] [ 4, 5, 3, 6, 2, 1 ]

// 문자열 밀기

const solution = (A, B) => {
  if (A === B) return 0;
  let arr = [...A];
  let count = 0;
  while (++count) {
    let temp = arr[arr.length - 1];
    arr.pop();
    arr.unshift(temp);
    if (arr.join("") === B) return count;
    if (arr.join("") === A) return -1;
  }
};

// 배열의 마지막 요소를 빼준뒤 배열의 맨 앞 부분에 넣어주는 것이 반복된다면 문자를 오른쪽으로 한 칸씩 미는 것과 같다.
// 아래의 코드는 temp라는 배열에 요소를 반복적으로 넣어주다, 마지막 요소를 맨 앞에 넣어주는 코드이다
// 이중포문이므로 가능하다면 리펙토링 필요.
// function solution(A, B){
//     if(A === B){
//         return 0
//     }
//     let a = [...A]
//     let b = [...B]
//     let arr = [...A]
//
//     let count = 0
//     for(;;){
//         let temp = []
//         arr.forEach((_,index,array) => {
//             if(index !== array.length-1){
//                 temp.push(array[index])
//             } else {
//                 temp.unshift(array[array.length-1])
//             }
//             arr = [...temp]
//         }
//         )
//         count ++
//         if(arr.join("")===b.join("")){
//             return count
//         }
//         if(arr.join("")===a.join("")){
//             return -1
//         }
//     }
// }

// 다항식 더하기

function solution(polynomial) {
  // 공백 제거 및 x를 1x로 만들어주기
  let arr = polynomial.split("+");
  let arr2 = arr.map((el) => el.replaceAll(" ", ""));
  let arr3 = arr2.map((el) => (el === "x" ? "1x" : el));
  // x와 숫자의 총 더한 값 계산
  let x_ = 0;
  let num = 0;
  for (let el of arr3) {
    if (el.includes("x")) {
      let x_split = el.split("x");
      x_ += Number(x_split[0]);
    } else {
      num += Number(el);
    }
  }
  // 결과값 조건 나눠주기
  if (num === 0) {
    if (x_ === 1) {
      return `x`;
    }
    return `${x_}x`;
  } else {
    if (x_ === 0) {
      return `${num}`;
    } else if (x_ === 1) {
      return `x + ${num}`;
    } else {
      return `${x_}x + ${num}`;
    }
  }
}
