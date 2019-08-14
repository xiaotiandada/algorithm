let g = new Map() // 顶点
const VERTEX  = 6;
const setVertex = v => g.set(v, []) // 设置顶点

const setEdge = (src, dest) => { // 设置边 边是互相的
  g.get(src).push(dest)
  g.get(dest).push(src)
}
// 打印图形
const printGraph = g => {
  let getKeys = g.keys()
  for (const i of getKeys) {
    let getValue = g.get(i)
    let count = ""
    for (const j of getValue) {
      count += j + ' '
    }
    console.log(i + " -> " + count )
  }
}


const dfs = startNode => {
  let visited = new Map()
  for(let i = 1; i <= VERTEX; i++) visited.set(i, false)

  const dfsUtil = (v, visited) => {
    let z = 0
    visited.set(v, true)
    // console.log(v)

    let get_next = g.get(v)
    for (const i in get_next) {
      let get_elem = get_next[i]
      if (!visited.get(get_elem)){
        // console.log('z', z)
        z = Math.max(z, dfsUtil(get_elem, visited) + 1)
      }
    }
    return z
  }
  return dfsUtil(startNode, visited)
}

for(let i = 1; i <= VERTEX; i++) setVertex(i)

// https://zh.wikipedia.org/wiki/%E6%A0%91_(%E5%9B%BE%E8%AE%BA) 树 (图论)
setEdge(1,4)
setEdge(2,4)
setEdge(3,4)
setEdge(4,5)
setEdge(5,6)

// printGraph(g)

let z = dfs(1)
console.log(z)
// console.log(g)



// console.log(g)