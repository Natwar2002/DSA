class node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    constructor () {
        this.root = null;
    }

    leftRotate(root) {
        // Let the right child of the node be 'rightChild'
        let rightChild = root.right;
    
        // Store the left subtree of 'rightChild'
        let T2 = rightChild.left;
    
        // Perform rotation
        rightChild.left = root;
        root.right = T2;
    
        // Update heights of the node and the new root
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        rightChild.height = Math.max(this.height(rightChild.left), this.height(rightChild.right)) + 1;
    
        // Return the new root
        return rightChild;
    }

    rightRotate (root) {  // root is unbalanced
        let leftChild = root.left;
        let T2 = leftChild.right;
    
        leftChild.right = root;
        root.left = T2;
    
        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        leftChild.height = Math.max(this.height(leftChild.left), this.height(leftChild.right)) + 1;
    
        return leftChild;
    }

    height(node) {
        if(!node) return 0;
        return node.height;
    }

    getBF (node) {
        if(!node) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    insert (data) {
        this.root = this.insertInAvl(this.root, data);
    }

    insertInAvl (root, data) {
        if(!root) {
            return new node(data);
        }

        if(data < root.data) {
            root.left = this.insertInAvl(root.left, data);
        } else if (data > root.data) {
            root.right = this.insertInAvl(root.right, data);
        } else {
            // If data already exist..
            return root;
        }

        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;

        // get balance factor;
        let balanceFactor = this.getBF(root);

        if(balanceFactor > 1) {
            // left heavy
            let beta = root.left;
            if(data < beta.data) {
                // right rotation
                return this.rightRotate(root);
            } else {
                // left-right rotation
                root.left = this.leftRotate(root.left);
                return this.rightRotate(root);
            }
        } else if (balanceFactor < -1) {
            // right heavy
            let beta = root.right;
            if(data > beta.data) {
                // left rotation
                return this.leftRotate(root);
            } else {
                // right-left rotation
                root.right = this.rightRotate(root.right);
                return this.leftRotate(root);
            }
        }
        return root;
    }
    
    delete(data) {
        this.root = this.remove(this.root, data);
    }

    remove(root, key) {
        if(!root) return null;
        if(key < root.val) {
            root.left = this.remove(root.left, key);
        } else if(key > root.val) {
            root.right = this.remove(root.right, key);
        } else {
            if(!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                let temp = root.right;
                while(temp.left != null) {
                    temp = temp.left;
                }
                root.val = temp.val;
                root.right = this.remove(root.right, temp.val);
            }
        }

        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;
        // get balance factor;
        let balanceFactor = this.getBF(root);

        if(balanceFactor > 1) {
            // left heavy
            let beta = root.left;
            if(key < beta.data) {
                // right rotation
                return this.rightRotate(root);
            } else {
                // left-right rotation
                root.left = this.leftRotate(root.left);
                return this.rightRotate(root);
            }
        } else if (balanceFactor < -1) {
            // right heavy
            let beta = root.right;
            if(key > beta.data) {
                // left rotation
                return this.leftRotate(root);
            } else {
                // right-left rotation
                root.right = this.rightRotate(root.right);
                return this.leftRotate(root);
            }
        } 
        return root;
    }

    preorder (root, res) {
        if(root == null) return null;

        res.push(root.data);
        this.preorder(root.left, res);
        this.preorder(root.right, res);
    }

    preorderTraversal () {
        let res = [];
        this.preorder(this.root, res);
        return res;
    }  
}

let c = new AVL();
c.insert(10);
c.insert(20);
c.insert(30);
c.insert(40);
c.insert(50);
c.insert(60);
c.insert(70);
c.insert(80);
c.insert(90);
c.insert(100);
let pre = c.preorderTraversal();
console.log(pre);

c.delete(20);
pre = c.preorderTraversal();
console.log(pre);