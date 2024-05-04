let res;
var preorder = function(root) {
    if(root == null) return null;

    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
};

var preorderTraversal = function (root) {
    res = [];
    preorder(root);
    return res;
}