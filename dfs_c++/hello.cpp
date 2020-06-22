#include <iostream>
#include <vector>
using namespace std;


int main() {

  const int N = 10;
  int n;

  int vertex = 6;
  vector<int> edge[N];
  // vector<int> edge [[1, 4],[2, 4], [3, 4], [4, 5],[5, 6]]

  cout << "hello world" << endl;

  cin >> n;

  for(int i = 0;i < n-1; i++) {
    int u, v;
    cin >> u >> v;
    edge[u].push_back(v);
    edge[v].push_back(u);

    // cout << i << u << v << endl;
  }

  cout << edge << endl;

  return 0;
}