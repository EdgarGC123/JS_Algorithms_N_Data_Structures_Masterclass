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
    get(index){
        if(index >= this.length || index < 0) return null;
        let current = this.head;
        for(let i=0; i<index; i++){
            current = current.next;
        }
        return current;
    }
    set(index, nVal){
        // if(index >= this.length || index < 0) return false;
        // let current = this.head;
        // for(let i=0; i<index; i++){
        //     current = current.next;
        // }
        // current.val = nVal;
        // return true;
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = nVal;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index==this.length){
            this.push(val)
            return true;
        }else if(index==0){
            this.unshift(val);
            return true;
        }
        let prevNode = this.get(index-1);
        if(prevNode){
            newNode = new Node(val);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }
    remove(index){
        // let prevNode = get(index-1);
        // if(prevNode.next){
        //     let saved = prevNode.next;
        //     prevNode.next = prevNode.next.next;
        //     this.length--;
        //     return saved.;
        // }
        // return false;

        if(index>=this.length || index<0) return undefined;
        if(index==0) return !!this.shift();
        if(index==this.length-1) return !!this.pop();
        let prev = this.get(index-1);
        let deleted = prev.next;
        prev.next = deleted.next;
        this.length--;
        return deleted;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next = null; 
        var prev = null;

        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

var list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
list.push("D");

list.traverse();
console.log("");
console.log("");
console.log("");

// list.pop();
// list.traverse();

// list.shift();
// list.traverse();

// console.log("");
// console.log(list.get(1))
// console.log(list.set(1, "Good Bye"))

// list.traverse();

list.reverse();
list.traverse();