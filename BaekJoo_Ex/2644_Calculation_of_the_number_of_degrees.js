// 문제: 2644, 촌수 계산

// 부모, 자식: 1촌
// 나-아버지: 1촌, 나-할아버지: 2촌, 나-아버지 형제: 3촌
// n: 전체 사람 수
// 촌수 계산을 해야 하는 사람의 번호: 2개
// m: 관계 수
// x, y: 부모 자식간의 관계 (x: 부모, y: 자식)
// 부모는 1명씩
// 촌수를 계산 못하면 -1 출력

// 촌수 배열 
function makeDegree(n, rel) {
    let arr = rel.slice()
    let degree = [];
    degree.length = n + 1;
    degree.fill(-1) // root 노드의 값은 -1로 초기화 되도록 함
    for (var i = 0; i < arr.length; i++) {
        let parent = parseInt(arr[i].split(" ")[0])
        let child = parseInt(arr[i].split(" ")[1])
        degree[child] = parent;
    }
    return degree;
}



function calculateDegrees(a, b, degree) {
    let degreeArray = degree.slice();
    let p1 = a;
    let p2 = b;
    let p1_ancestors = [];
    let p2_ancestors = [];
    let p1_degree = 0;
    let p2_degree = 0;

    // LCA (Lowest Common Ancestor): 최소 공통 조상 찾기

    // p1의 공통 조상 찾기
    while (p1 > 0) {
        p1_ancestors.push({
            parent: p1,
            degree: p1_degree
        })
        p1_degree++;
        p1 = degreeArray[p1]
    }

    // p2의 공통 조상 찾기
    while (p2 > 0) {
        p2_ancestors.push({
            parent: p2,
            degree: p2_degree
        })
        p2_degree++;
        p2 = degreeArray[p2]
    }

    for (let p1_an of p1_ancestors) {
        for (let p2_an of p2_ancestors) {
            if (p1_an.parent === p2_an.parent) {
                return p1_an.degree + p2_an.degree
            }
        }
    }

    return -1
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
    let a = parseInt(input[1].split(" ")[0])
    let b = parseInt(input[1].split(" ")[1])
    let m = parseInt(input[2])
    let tree = [];
    for (var i = 0; i < m; i++) {
        tree.push(input[3 + i])
    }
    // console.log(makeDegree(n, tree))
    console.log(calculateDegrees(a, b, makeDegree(n, tree)))
    process.exit();
});