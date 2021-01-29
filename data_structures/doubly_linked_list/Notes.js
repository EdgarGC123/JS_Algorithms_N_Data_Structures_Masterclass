/*
doubly is almost identical to a singly, except every node has a pointer to the previous node. 

MORE MEMORY NECESSARY but more flexibility.
*/

class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(this.length==0) return undefined;

        let removed = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
        }
        this.length--
        return removed;
    }
    shift(){
        if(this.length==0){
            return undefined
        }
        let oldHead = this.head;
        if(this.length==1){
            this.head = null;
            this.length = null;
        }else{
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val)
        if(this.length==0){
            this.tail = newNode;
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }
    get(i){
        if(i<0 || i>=this.length) return null;
        let middle = this.length / 2, current, c=0;
        if( i <= middle){
            current = this.head;
            while(c<i){
                current = current.next
                c++;
            }
            // for(let j = 0;j<i; j++){
            //     current = current.next;
            // }
            // while(i>0){
            //     current = current.next;
            //     i--;
            // }
        }else{
 
            // while(i<this.length-1){
            //     current = current.prev;
            //     i++;
            // }
            // let count = this.length-1;
            // while(i<count){
            //     current = current.prev;
            //     count--;
            // }
        }
        return current;
    }
    set(i, val){
        let edit = this.get(i);
        if(edit){
            edit.val = val;
            return true;
        }
        return false;
    }
    insert(i,val){
        if(i < 0 || i>=this.length) return false;
        if(i === 0) return !!this.unshift(val);
        if(i == this.length) return !!this.push(val);
        
        let newNode = new Node(val);
        let preNode = this.get(i-1);
        let aftNode = preNode.next;

        newNode.next = aftNode;//3
        aftNode.prev = newNode;//4
        preNode.next = newNode;//1
        newNode.prev = preNode;//2

        this.length++;
        return true;
    }
    remove(i){
        if(i < 0 || i>=this.length) return false;
        if(i === 0) return !!this.shift();
        if(i == this.length-1) return !!this.pop();

        let removed = this.get(i);
        let preNode = removed.prev;
        let aftNode = removed.next;

        preNode.next = aftNode;
        aftNode.prev = preNode;
        removed.next = null;
        removed.prev = null;

        this.length--
        return removed;
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
    print(){
        let current = this.head;
        let pr = []
        while(current){
            pr.push(current.val);
            current = current.next;
        }
        console.log(pr)
    }
}

let list = new DoublyLinkedList();

list.push("Hello");
list.push("Good");
list.push("Bye");
list.push("!");

// list.traverse();
// list.print();
// list.pop();
// list.print();
// list.shift();
// list.print();
// list.unshift("New");
// list.print();
// console.log (list.get(1));
// list.set(0, "Hi")
// list.print();
// list.insert(2,"Man");
list.print();
list.remove(3);//removing last item;
list.print();