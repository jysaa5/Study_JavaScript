// 문제: 2667, 단지번호붙이기

// 같은 영역에 집 개수
let num = 0;
// 지도
let complex_map = [];
// 방문 여부 체크 배열 (지도와 크기 동일)
let visited = []
// 동, 북, 서, 남 (4방향) -> 순서는 상관없음.
let dx = [1, 0, -1, 0]
let dy = [0, 1, 0, -1]



// 내 위치에서 동서남북 방향 살펴보기
function dfs(j, k) {
    // 방향 벡터
    // 현재 위치
    // 방문 여부 체크
    visited[j][k] = 1;
    if (complex_map[j][k] === 1) {
        num++;
    }

    for (var l = 0; l < 4; l++) {
        let x1 = j + dx[l]
        let y1 = k + dy[l]
        if ((0 <= x1) && (x1 < complex_map.length) && (0 <= y1) && (y1 < complex_map.length)) {
            if (complex_map[x1][y1] === 1 && visited[x1][y1] === 0) {
                // 집 개수 1 증가
                dfs(x1, y1)
            }
        }
    }
}


// main 입출력
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    let n = parseInt(input[0])
    //let complex_map = [];
    // 방문 체크
    //let visited = [];

    visited.length = n;

    // for (var m = 0; m < n; m++) {
    //     visited[m] = []
    // }

    // for (var m = 0; m < n; m++) {
    //     for (var o = 0; o < n; o++) {
    //         visited[m][o] = 0
    //     }
    // }

    visited = Array.from({
        length: n
    }, () => Array(n).fill(0))

    //console.log(visited)

    for (var i = 0; i < n; i++) {
        complex_map.push(input[i + 1].split("").map((i) => parseInt(i)))
    }
    //console.log(complex_map)

    // 영역 안에 집 개수 배열 (num을 넣은 배열)
    let nums = []

    for (var j = 0; j < n; j++) {
        for (var k = 0; k < n; k++) {
            // 집의 개수 초기화
            if (complex_map[j][k] === 1 && visited[j][k] === 0) {
                dfs(j, k)
                nums.push(num)
                num = 0
            }
        }
    }


    console.log(nums.length)
    nums.sort((a, b) => a - b)
    for (let home of nums) {
        console.log(home)
    }
    //console.log(nums)

    //console.log(visited)
    process.exit();
});

// 격자판도 그래프이다.
// 위, 아래, 좌, 우 연결이 되어 있는지 확인 필요.
// 방향 벡터 필요함.