/*

a data structure that contains a head, tail and end length property
linked list consist of nodes and each node has a value and a pointer to another noode or pointer to null.


linked list...
- don't have indexes!
- connected via nodes with a next pointer
- random access is not allowed.

Arrays...
- indexed in order!
- insertion and deletion can be expensive.
- can quickly be accessed at a specific index.

linked list is a collection of nodes, which has a piece of data and reference to next node.

*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

/*
this first example is extremely inefficient. we need a second class to handle pushing (adding a new node at the end)
*/


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;//3
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){//aka this.head == null;
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length>1){
            var current = this.head;
            // let i = 1;
            // while(i<this.length-1){
            //     current = current.next;
            //     i++;
            // }
            while(current.next.next){
                current = current.next;
            }
            this.tail = current;
            current.next = null;
            this.length--;
        }else if(this.length==1){
            this.head = null;
            this.tail = null;
            this.length--;
        }else{
            return undefined;
        }
        return this;
    }
    shift(){
        if(this.length > 1){
            var old = this.head;
            this.head = old.next;
            old.next = null;
            this.length--;
        }else if( this.length==1){
            this.head = null;
            this.tail = null;
            this.length--;
        }else{
            return undefined
        }
        return this.head;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length ==0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!")

list.traverse();

// list.pop();
// list.traverse();

list.shift();
list.traverse();