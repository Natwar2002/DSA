var f = function (root) {
    if(!root) return 0;
    return 1 + Math.max(f(root.left), f(root.right));
};

var maxDepth = function (root) {
    return f(root);
};