import Stack from "./stack1.js"

const stack1 = new Stack()
stack1.push(21)
console.log("Peek result : ",stack1.peek());
console.log("Pop result : ",stack1.pop());
console.log("Peek result : ",stack1.peek());
console.log("isEmpty result : ",stack1.isEmpty());
stack1.push(29)
stack1.push(37)
console.log("Size of the stack : ",stack1.size());
console.log("Peek result : ",stack1.peek());
console.log("isEmpty result : ",stack1.isEmpty());