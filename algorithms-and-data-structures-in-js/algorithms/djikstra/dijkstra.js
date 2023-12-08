/*
## Dijkstra's Algorithm:

It uses a `priority queue` to store and order the vertices (nodes) values (weight=path cost), then when the end point is reached it will use the shortest path from a starting point to an end point.
It has a problem, it can waste time by going in the wrong destination due to the weight of a vertice without knowing it is going further of the end point.

That can be solved by using an `A*` search algorithm.

## A* (A star) Search Algorithm

Its build on top of the Dijkstra's algorithm, it adds a heuristic to know how far we have to go, that added with the path's cost forms a `combined heuristic` (combined weight).

This combined weight is used to track and order which node is prioritize in the `priority queue` (sort by the node having the smallest `combined queue` first) instead of the path's cost used in Dijkstra's algorithm.

- From the the start point, calculate the `combined weight` for each node that the node is connected to and stores it in a `priority queue` (pq) and sort them.
- Use the node (1) with the smallest `combined weight` to continue.
- Traverse each path from the node (1), calculate the `combined weight` for each node that the current node is connected to and stores it in the `priority queue` (pq) and sort them.
- Order the `priority queue` by the smallest `combined weight`.
- When all `combined weight` has been calculated from the node (1), return the node with the smallest `combined weight` as a result to store (could be any datastructure we choose, like a Map (it keeps the order of insertion)).
- Finally, when the end point is reached, we return the result (`Map`, `array`,...) that should contains all the nodes we need to traverse to take the shortest path from `S` to `E` ("S"=start/"E"=end).


### References:

-[Dijkstra's Algorithm - Computerphile - (Youtube)](https://www.youtube.com/watch?v=GazC3A4OQTE)
- [A* (A Star) Search Algorithm - Computerphile - (Youtube)](https://www.youtube.com/watch?v=ySN5Wnu88nE)
*/

/*
## Implementation example:

### Requirements:

- process nodes in a `priority queue`.
- return a node that have the smallest `combined weight` and stores it in a array (result)
- store in a variable (pathCostToAllAttachedNodes) the sum of the pathCost of each node in the array (result)


We assume that we have a start point `S` and an end point `E`:

S = [[pathCostToAttachedNode=0, distanceFromE=maxDistanceFromE], [listOfAttachedNodes]]
E = [[pathCostToAllAttachedNodes, distanceFromE=0],
      combinedWeight: (distanceFromE=0, pathCostToAllAttachedNodes) =>
            distanceFromE + pathCostToAllAttachedNodes]

- For each node:

node = [[pathCostToAttachedNode=x, distanceFromE=y],
          combinedWeight: (distanceFromE, pathCostToAttachedNode) =>
            distanceFromE + pathCostToAttachedNode]

result = [nodes]
E = result

*/
