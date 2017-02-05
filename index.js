const can = document.getElementById('canvas')
const ctx = can.getContext('2d')

let [x, y] = [can.width / 2, can.height / 2]

setInterval(() => {
  [x, y] = [Math.random() * 2 - 1 + x, Math.random() * 2 - 1 + y]
  ctx.fillRect(x - 1, y - 1, 2, 2);
}, 10)
