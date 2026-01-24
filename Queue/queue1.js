// ---------------------------- Queue key operstions -------------------------------

// 1. Queue.enqueue(item) -> Adds an element to thr end of the queue.
// 2. Queue.dequeue() -> Remove an element from the front of the queue.
// 3. Queue.peek() -> Get the element at the front of the queue without removing it.
// 4. Queue.isEmpty() -> Check and returns true if the queue is empty otherwise false.
// 5. Queue.size() -> Get the number of the elements in the queue.


class Queue{
    #items = []

    enqueue(item){
        this.#items.push(item)
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("No items in the queue.")
        }
        return this.#items.shift()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.#items[0]
    }

    isEmpty(){
        return (this.#items.length === 0)
    }

    size(){
        return this.#items.length
    }
}

export default Queue