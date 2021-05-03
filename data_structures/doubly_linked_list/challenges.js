class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    remove(i){
        if(i<0 || i>=this.length) return undefined;
        if(this.length ==0) return undefined;
        if(this.length ==1){
            let removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }
        if(i==0){
            let removed = this.head;
            this.head = removed.next;
            removed.next = null;
            ths.head.prev = null;
            this.length--;
            return removed;
        }
        if(i==this.length-1){
            let removed = this.tail;
            this.tail = removed.prev;
            removed.prev = null;
            ths.tail.next = null;
            this.length--;
            return removed;
        }
        
        
        let current;
        if(i <= this.length/2){
            current = this.head;
            while(i>0){
                current = current.next;
                i--;
            }
        }else{
            current = this.tail;
            while(i<this.length-1){
                current = current.prev;
                i++;
            }
        }
        
        let nextOne = current.next;
        let prevOne = current.next;
        
        prevOne.next = nextOne;
        nextOne.prev = prevOne;
        current.next = null;
        current.prev= null;
        
        
        
        // current.prev.next = current.next;
        // current.next.prev = current.prev;
        // current.prev = null;
        // current.next = null;
        
        
        length--;
        return current;
    }
}