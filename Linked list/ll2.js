import LinkedList from "./ll1(singly).js";


const LL1 = new LinkedList()
LL1.insertAtEnd(3)
LL1.insertAtEnd(8)
LL1.insertAtEnd(8)
LL1.insertAtEnd(8)
LL1.traverse()
console.log("Deleting value 3");
LL1.deleteByValue(3)
LL1.traverse()
console.log("Searching 1",LL1.search(1));
console.log("Searching 8",LL1.search(8));
console.log("Length of LL",LL1.length());