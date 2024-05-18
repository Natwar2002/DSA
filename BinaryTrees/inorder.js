let res;
var inorder = function (root) {
    if(root == null) return null;

    inorder(root.left);
    res.push(root);
    inorder(root.right);
};

var inorderTraversal = function(root) {
    res = [];
    inorder(root);
    return res;
}