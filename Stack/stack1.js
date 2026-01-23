// ----------------------- Stack key operations -------------------------
// stack.push(ele) -> Adds an element to the top of the stack
// stack.pop() -> Removes and returns the top element of the stack
// stack.peek() -> Returns the top element without removing it
// stack.isEmpty() -> Checks and returns true if the stack is empty otherwise false
// stack.size() -> Returns the number of elements in the stack

class Stack{
    #items = []   // Making items array private
    constructor(){}

    push(element){
        this.#items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("No items to pop")
        }
        return this.#items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.#items[this.#items.length-1]
    }
    
    isEmpty(){
        return this.#items.length === 0;
    }

    size(){
        return this.#items.length
    }

}

export default Stack