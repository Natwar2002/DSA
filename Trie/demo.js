class node {
    constructor (data) {
        this.data = data;
        this.isTerminal = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new node(null);
    }

    insert(word) {
        let cur = this.root;
        for(let i = 0; i < word.length; i++){
            const c = word[i];
            if(cur.children[c]) {
                cur = cur.children[c];
            } else {
                cur.children[c] = new node(c);
                temp = cur.children[c];
            }
        }
        cur.isTerminal = true;
    }

    search(word) {
        let cur = this.root;
        for(let i = 0; i < word.length; i++) {
            const c = word[i];
            if(cur.children[c]) {
                cur = cur.children[c];
            } else {
                return false;
            }
        }
        return cur.isTerminal;
    }

    startsWith(prefix) {
        let cur = this.root;
        for(let i = 0; i < prefix.length; i++) {
            const c = prefix[i];
            if(cur)
        }
    }
}