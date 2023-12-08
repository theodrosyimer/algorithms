const mapToAnalyse = require('./map.js')

const map = Object.entries(mapToAnalyse)

class ArrayPriorityQueue {
  constructor(options) {
    const { sortFn } = options
    this.data = options.data.slice(0) || []
    this.data.sort(sortFn).reverse()
  }

  queue = element => {
    if (this.data.isEmpty()) {
      return this.data.push(element)
    }
    // TODO: finish this if statement
    const added = false
    for (let i = 0; i < this.data[1].length; i++) {
      if (element[1]) {
      }
    }
  }

  dequeue = () => this.data.pop()

  peek = () => this.data[this.size() - 1] // ?

  size = () => this.data.length

  printQ = () => this.data

  isEmpty = () => {
    if (this.data.length === 0) {
      return true
    }
    return false
  }

  clear = () => (this.data.length = 0)
}

const pq = new ArrayPriorityQueue({ data: map })

pq.size() // ?
pq.dequeue() // ?
pq.peek() // ?
pq.isEmpty() // ?
// pq.printQ() // ?
pq.clear() // ?
pq.printQ() // ?
pq.isEmpty() // ?
