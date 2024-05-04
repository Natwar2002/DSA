let res;
var inorder = function (root) {
    if(root == null) return null;

    preorder(root.left);
    res.push(root);
    preorder(root.right);
};

var inorderTraversal = function(root) {
    res = [];
    
}