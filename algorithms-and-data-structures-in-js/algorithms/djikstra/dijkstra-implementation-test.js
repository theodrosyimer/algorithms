// const mapFromObject = new Map(Object.entries(map)) // ?

const node = { S: [['A', [7, 9]], ['B', [2, 7]], ['C', [3, 8]]] }

function nodeToPriorityQueueProcessor(n)  {
  const nodeToArr = Object.entries(n) // ?
  const pathCostToAttachedNode = nodeToArr[0][1][0][1][0] // ?
  const distanceFromE = nodeToArr[0][1][0][1][1] // ?
  const combinedWeight = distanceFromE + pathCostToAttachedNode

  const isStart = false
  const isEnd = false

  return {
    pathCostToAttachedNode,
    combinedWeight
  }
}

nodeToPriorityQueueProcessor(node) // ?

const distanceFromAnyToAnyNode = {}

const PriorityQueue = []

const result = []

function pathCostToAllAttachedNodes(result) {
  for (const n of result) {
    return n[pathCostToAttacheNode]
  }
}
