const V = 6 // 顶点
const g = new Map() // 点

const setV = v => g.set(v, []) // 设置顶点
const setE = (v, v1, v2) => { // 设置边 edge
  v.get(v1).push(v2)
  v.get(v2).push(v1)
}

for (let i = 1; i <= V; i++) setV(i) // 循环设置顶点

let edge = [ // 边的数据
  [1,4],[2,4],[3,4],
  [4,5],[5,6]
]

for (const i of edge) setE(g, i[0], i[1]) // 循环设置边


const dfs = v => {
  let visited = new Map()
  for (let i = 1; i <= V; i++) visited.set(i, false)
  const dfsFunc = (v, visited) => {
    let z = 0
    // console.log(v, visited)
    visited.set(v, true)
    // console.log(v, visited)
    let get_next = g.get(v)
    for(const i in get_next){
      let get_elem = get_next[i]
      if (!visited.get(get_elem)) {
        z = Math.max(z, dfsFunc(get_elem, visited) + 1)
      }
    }
    return z
  }
  return dfsFunc(v, visited)
}


let z = dfs(1)
console.log(z)

// console.log(g)