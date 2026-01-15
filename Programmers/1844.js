// 게임 맵 최단 거리

function solution(maps) {
  if (maps[0][0] === 0) {
    return -1;
  }

  const n = maps.length;
  const m = maps[0].length;

  // 동, 서, 남, 북
  const dy = [0, 0, 1, -1];
  const dx = [1, -1, 0, 0];

  const queue = [];
  let head = 0;
  let tail = 0;

  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  queue[tail++] = [0, 0];
  dist[0][0] = 1;

  while (head < tail) {
    const [currentY, currentX] = queue[head++];

    if (currentY === n - 1 && currentX === m - 1) {
      return dist[currentY][currentX];
    }

    for (let i = 0; i < dy.length; i++) {
      const nextY = currentY + dy[i];
      const nextX = currentX + dx[i];

      if (nextY < 0 || nextX < 0 || nextY >= n || nextX >= m) continue;
      if (dist[nextY][nextX] !== -1) continue;

      if (maps[nextY][nextX] === 1) {
        queue[tail++] = [nextY, nextX];
        dist[nextY][nextX] = dist[currentY][currentX] + 1;
      }
    }
  }

  return -1;
}