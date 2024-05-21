function f (root) {
    if(!root) return null;
    f(root.left);
    f(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
}

var invertBinaryTree = function (root) {
    f(root);
    return root;
};