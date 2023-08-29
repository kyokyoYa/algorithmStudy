// 구슬을 나누는 경우의 수
// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

function hyunwoo(choi) {
  if (choi <= 1) {
    return 1;
  }
  return choi * hyunwoo(choi - 1);
}

function solution(balls, share) {
  const n_factorial = hyunwoo(balls);
  const n_minus_m_factorial = hyunwoo(balls - share);
  const m_factorial = hyunwoo(share);

  return Math.round(n_factorial / (n_minus_m_factorial * m_factorial));
}

// 캐릭터의 좌표
// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

// [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.

function solution(keyinput, board) {
  let answer = [0, 0];
  for (let el of keyinput) {
    if (el === "right") {
      answer[0] += 1;
    } else if (el === "left") {
      answer[0] -= 1;
    } else if (el === "up") {
      answer[1] += 1;
    } else {
      answer[1] -= 1;
    }
    if (Math.abs(answer[0]) > parseInt(board[0] / 2)) {
      if (answer[0] < 0) {
        answer[0] = -parseInt(board[0] / 2);
      } else {
        answer[0] = parseInt(board[0] / 2);
      }
    }
    if (Math.abs(answer[1]) > parseInt(board[1] / 2)) {
      if (answer[1] < 0) {
        answer[1] = -parseInt(board[1] / 2);
      } else {
        answer[1] = parseInt(board[1] / 2);
      }
    }
  }
  return answer;
}

// 종이 자르기

// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

// 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요

function solution(M, N) {
  let answer = M * N - 1;
  return answer;
}

// 직사각형 넓이 구하기

// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  let x = [];
  let y = [];
  for (let el of dots) {
    x.push(el[0]);
    y.push(el[1]);
  }
  let x_sort = x.sort((a, b) => a - b);
  let y_sort = y.sort((a, b) => a - b);
  let answer = (x_sort[3] - x_sort[0]) * (y_sort[3] - y_sort[0]);
  return answer;
}

// 로그인 성공?
햐
// 머쓱이는 프로그래머스에 로그인하려고 합니다. 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

function solution(id_pw, db) {
  let id = db.filter((el) => el[0] === id_pw[0]);
  if (id.length === 0) {
    return "fail";
  }
  let pw = id.filter((el) => el[1] === id_pw[1]);
  if (pw.length === 0) {
    return "wrong pw";
  }
  return "login";
}
