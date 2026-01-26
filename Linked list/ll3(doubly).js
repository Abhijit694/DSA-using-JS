// ------------------------ Doubly linked list key operations -------------------------

// 1. Insert 
//          -> At the end - append
//          -> At the beginning - prepend
// 2. Traverse
//          -> From the start
//          -> From the end
// 3. Delete by value
// 4. Search
// 5. Length

class Node{
    constructor(data){
        this.previous = null
        this.data = data
        this.next = null
    }
}

class DoublyLL{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }else{
            const currentLastNode = this.tail
            currentLastNode.next = newNode
            newNode.previous = currentLastNode
            this.tail = newNode
        }

    }

    prepend(data){
        const newNode = new Node(data)
        if(this.tail === null){
            this.head = newNode
            this.tail = newNode
        }else{
            
        }

    }
}
