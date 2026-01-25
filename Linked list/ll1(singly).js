// ----------------------- Singly linked list key operations --------------------------

// 1. Insertion
//       -> At the beginning
//       -> At the end
//       -> At aspecific position
// 2. Deletion
//       -> By value
//       -> By position
// 3. Traversal -> Visiting all the nodes sequentially one by one from start to end
// 4. Search -> Find a node with a specific value
// 5. Length -> Number of nodes in a linked list

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insertAtEnd(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
    }

    deleteByValue(valueToDelete){
        if(this.head === null){
            return
        }
        let current = this.head
        if(current.data === valueToDelete){
            this.head = current.next
            return
        }

        let previous = null
        while(current.next !== null){
            previous = current
            current = current.next
            if(current.data === valueToDelete){
                previous.next = current.next
                return
            }
        }

    }

    length(){
        if(this.head === null){
            return 0
        }

        let counter = 1
        let current = this.head
        while(current.next !== null){
            current = current.next
            counter++
        }
        return counter
    }

    search(valueToSearch){
        if(this.head === null){
            return false
        }
        let current = this.head
        if(current.data === valueToSearch){
            return true
        }

        while(current.next !== null){
            current = current.next
            if(current.data === valueToSearch){
                return true
            }
        }

        return false
    }

    traverse(){
        if(this.head === null){
            return
        }

        let current = this.head
        console.log(current.data);
        while(current.next !== null){
            current = current.next
            console.log(current.data);
        }
    }
}

export default LinkedList