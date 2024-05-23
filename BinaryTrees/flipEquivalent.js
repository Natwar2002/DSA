function f (root1, root2) {
    if(root1 == null && root2 == null) return true;
    if(root2 == null || root1 == null) return false;
    if(root1.val != root2.val) return false;

    return f(root1.left, root2.left) && f(root1.right, root2.right) || f(root1.left, root2.right) && f(root1.right, root2.left);
}

var flipEquivalent = function(root1, root2) {
    return f(root1, root2);
};