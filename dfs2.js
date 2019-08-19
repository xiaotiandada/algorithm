let vertexLen = 6; // 顶点数
let vertex = new Map(); // 顶点数据集合 map 可以设置键对值 0 1 2 3 4 5 or 1 2 3 4 5 6 or A B C D E F G ... ...

/**
 * 设置顶点
 * @param {String || Number} v 顶点
 */
const setVertex = v => vertex.set(v, []);
/**
 * 设置边
 * @param {String || Number} v1 点
 * @param {String || Number} v2 点
 */
const setVertexEdge = (v1, v2) => {
  vertex.get(v1).push(v2);
  vertex.get(v2).push(v1);
};

// 设置点
for (let i = 1; i <= vertexLen; i++) setVertex(i);

// 定义边
let vertexEdge = [[1, 4], [2, 4], [3, 4], [4, 5], [5, 6]];

// 设置边
for (let i = 0; i < vertexEdge.length; i++)
  setVertexEdge(vertexEdge[i][0], vertexEdge[i][1]);

/**
 * dfs
 * @param {String || Number} startNode 开始点
 */
const dfs = startNode => {
  let visited = new Map(); // 保持和顶点结构一样
  for (let i = 1; i <= vertexLen; i++) visited.set(i, false); // 设置访问状态

  // dfs 方法
  const dfsFunc = (startNode, visited) => {
    let z = 0; // 长度
    visited.set(startNode, true); // 第一个点设置已访问
    let get_next = vertex.get(startNode); // 获得顶点的所有临接点
    for (let i = 0; i < get_next.length; i++) {
      // 循环临接点
      let get_elem = get_next[i]; // 得到元素
      if (!visited.get(get_elem)) {
        // 是否访问
        z = Math.max(z, dfsFunc(get_elem, visited) + 1); // 增加边数
      }
    }
    return z;
  };
  return dfsFunc(startNode, visited);
};

/**
 * dfs
 * @param {String || Number} startNode 开始点
 */
const dfs1 = startNode => {
  // 记录开始点和父级节点
  const dfsFunc = (startNode, parentNode = -1) => {
    let z = 0; // 记录长度
    let get_next = vertex.get(startNode); // 得到相邻节点
    for (let i = 0; i < get_next.length; i++) { // 循环点
      let get_elem = get_next[i]; // 得到点
      if (get_elem === parentNode) continue; // 如果是父节点 跳过
      z = Math.max(z, dfsFunc(get_elem, startNode) + 1); // 递归添加长度
    }
    return z;
  };
  return dfsFunc(startNode);
};

let z = dfs(1);
console.log(z);

let z1 = dfs1(1);
console.log(z1);

console.log(vertex);
