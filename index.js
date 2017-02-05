const can = document.getElementById('canvas')
const ctx = can.getContext('2d')

can.width = innerWidth
can.height = innerHeight

const start = [0, 0]

const path = [start]

let [xymin, xymax] = [0, 0]

setInterval(() => {
  const [last_x, last_y] = path[path.length - 1]

  const [x, y] = [
    Math.random() * 2 - 1 + last_x,
    Math.random() * 2 - 1 + last_y
  ]

  path.push([x, y])

  xymin = Math.min(xymin, x)
  xymax = Math.max(xymax, x)
  xymin = Math.min(xymin, y)
  xymax = Math.max(xymax, y)

  ctx.clearRect(0, 0, can.width, can.height)
  ctx.beginPath()
  ctx.moveTo(
    (start[0] - xymin) / (xymax - xymin) * can.width,
    (start[1] - xymin) / (xymax - xymin) * can.height
  )
  for (const [x, y] of path) {
    ctx.lineTo(
      (x - xymin) / (xymax - xymin) * can.width,
      (y - xymin) / (xymax - xymin) * can.height
    )
  }
  ctx.stroke()
}, 0)
