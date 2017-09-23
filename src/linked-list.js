const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;   
        
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var node = this._head, i = 0;
         while (i < index){
             node = node.next;
             i++;
         }
         return node.data;
    }

    insertAt(index, data) {
        var node = new Node(data), i = 0, iNode = this._head;

            if (index == 0){
                this._head.prev = node;
                this._head = node;
                return this.data;
            } else {
                if (index == this.legth){
                    this._tail.next = node;
                    node.prev = this._tail;
                    this._tail = node;    
                    return this.data;
                } else {
                    while (i < index){
                        iNode = iNode.next;
                        i++;
                    }
                    node.prev = iNode.prev;
                    iNode.prev.next = node;
                    iNode.prev = node;
                    node.next = iNode;
                    return node;
                }
            }
            this.length++;        
            return node;
    }

    isEmpty() {
        if (this.length === 0){
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head.data = null;        
        this._tail.data = null;
        return this;
    }

    deleteAt(index) {
        var node = this._head, i = 0;
        if (index < this.length) {            
            while (i < index) {
                node = node.next;
                i++;
            }
            while (i != this.length - 1) {
                node.data = node.next.data;
                this._tail = node;
                node = node.next;
                i++;
            }
            node.data = null;
            node.next = null;
            this.length--;
            return this;
        }            
    }

    reverse() {
        var node = new Node(), i = 0, nHead = this._head, nTail = this._tail; 
        while (i < Math.floor(this.length / 2)){
            node.data = nTail.data;
            nTail.data = nHead.data;
            nHead.data = node.data;
            nHead = nHead.next;
            nTail = nTail.prev;
            i++;  
        }
        return this;
    }

    indexOf(data) {
        var node = this._head,  i = 0; 
        while (i < this.length){
            if (node.data != data){
                node = node.next; 
                i++;              
            } else {
                return i;                   
            }            
        }
    return -1;    
    }
}

module.exports = LinkedList;
