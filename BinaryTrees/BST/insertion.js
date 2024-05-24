function f(root, val) {
    if(root == null) {
        return TreeNode(val)
    }

    if(root.val > val) {
        root.left = f(root.left, val);
    } else {
        root.right = f(root.right, val);
    }
    return root;
}

var insertIntoBST = function(root, val) {
    return f(root,val);
}