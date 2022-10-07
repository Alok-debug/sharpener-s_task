//-------stack implimentation---------Queue code is after stack code---
class Stack {
    constructor() {
        this.arr = [];
    }
    
    // add element to the stack
    add(element) {
        return this.arr.push(element);
    }
     
    // remove element from the stack
    remove() {
        if(this.arr.length > 0) {
            return this.arr.pop();
        }
        else {
            console.log('Empty');
        }
    }
    
    // view the last element
    peek() {
        return this.arr.length>0? this.arr[this.arr.length - 1]:console.log('Empty');
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.arr.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.arr.length;
    }
 
    // empty the stack
    clear(){
        this.arr = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);

stack.remove();

console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.remove();
stack.remove();
stack.remove();
stack.remove();
//stack.clear();
console.log(stack)




//------queue implimentation------

class Queue {
    constructor() {
        this.arr = [];
    }
    
    // add element to the queue
    enqueue(element) {
        return this.arr.push(element);
    }
    
    // remove element from the queue
    dequeue() {
        if(this.arr.length > 0) {
            return this.arr.shift();
        }
    }
    
    // view the last element
    peek() {
        return this.arr[this.arr.length - 1];
    }
    
    // check if the queue is empty
    isEmpty(){
       return this.arr.length == 0;
    }
   
    // the size of the queue
    size(){
        return this.arr.length;
    }
 
    // empty the queue
    clear(){
        this.arr = [];
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());

queue.clear();
console.log(queue.items);