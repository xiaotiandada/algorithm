//
//  main.cpp
//  dfs
//
//  Created by xiaotian on 2019/8/21.
//  Copyright © 2019 xiaotian. All rights reserved.
//

#include <iostream>
#include <vector>
using namespace std;

const int N = 1e6;
vector<int> edge[N];

// u 开始点 p 父节点
pair<int, int> dfs(int u, int p = -1) {
  // z first 长度 z second 最深点
  // first += 1 second 为 u
  pair<int, int> z = {0, u};
  for(auto v: edge[u]) {
    if (v == p) continue;
    z = max(z, dfs(v, u));
  }
  z.first += 1;
  return z;
}


int main() {
  int n;
  cin >> n;
  
  for(int i = 0; i < n - 1; i++) {
    int v, u;
    cin >> v >> u;
    edge[v].push_back(u);
    edge[u].push_back(v);
  }
  
  
  pair<int, int> z = dfs(1);
  z = dfs(z.second);
  
  cout << z.first-1 << endl;
  
}
