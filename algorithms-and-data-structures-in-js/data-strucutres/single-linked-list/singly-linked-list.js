/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    if (!this.length) {
      this.head = new Node(value)
      this.tail = this.head
    }
    if (this.length) {
      this.tail.next = new Node(value)
      this.tail = this.tail.next
    }
    this.length++
  }
}

const list = new SinglyLinkedList()

list.push('Hi ')
list.push('there ')
list.push('it is ')
list.push('Theo!')
list.push('and ')
list.push('Co!')

list // ?
