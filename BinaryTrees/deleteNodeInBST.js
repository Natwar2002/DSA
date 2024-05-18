var f = function(root, key) {
    if(!root) return null;
    if(key < root.val) {
        root.left = f(root.left, key);
    } else if(key > root.val) {
        root.right = f(root.right, key);
    } else {
        if(!root.left && !root.right) {
            return null;
        } else if (!root.left) {
            return f(root.right);
        } else if (!root.right) {
            return f(root.left)
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
                root.right = f(root.right, temp.val);
            }
        }
    }
}

var deleteNode = function(root, key) {
    return f(root, key);
};