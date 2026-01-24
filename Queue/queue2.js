import Queue from "./queue1.js";

const queue1 = new Queue()
queue1.enqueue(2)
// const dequeuedItem = queue1.dequeue(2)
// console.log("Dequeued item is",dequeuedItem);
const peekedItem = queue1.peek()
console.log("Peeked item",peekedItem);
console.log("Queue empty result :",queue1.isEmpty());
const dequeuedItem = queue1.dequeue(2)
console.log("Dequeued item is",dequeuedItem);
console.log("Queue empty result :",queue1.isEmpty());
console.log(queue1.size());