function f(root, val) {
    if(!root) return null;
    if(root.val > val) {
        return f(root.left, val); 
    } else if(root.val < val) {
        return f(root.right, val);
    } else {
        return root;
    }
} 

var searchBST = function (root, val) {
    return f(root);
}