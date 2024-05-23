let ans;
function f(root) {
    if(root == null) return 0;
    let lst = f(root.left);
    let rst = f(root.right);

    ans = ans && (Math.abs(lst - rst) <= 1);
    return 1 + Math.max(lst, rst);
}

var isBalanced = function (root) {
    ans = true;
    f(root);
    return ans;
};