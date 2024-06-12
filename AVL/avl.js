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

    rightRotate (root) {
        let leftChild = root.left;
        let T2 = leftChild.right;
    
        leftChild.right = node;
        node.left = T2;
    
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

    insert (root, data) {
        if(root == null) {
            return new node(data);
        }

        if(data < root.data) {
            root.left = this.insert(root.left, data);
        } else if (data > root.data) {
            root.right = this.insert(root.right, data);
        } else {
            // If data already exist..
            return root;
        }

        root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;

        // get balance factor;
        let balanceFactor = this.getBF(root);

        // left heavy
        if(balanceFactor > 1 && data < root.left.data) {
            return this.rightRotate(root);
        }

        // right heavy
        if(balanceFactor < -1 && data > root.right.data) {
            return this.leftRotate(root);
        }

        // 
        if(balanceFactor > 1 && data > root.left.data) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }
    }
}