let ans;
function f (root) {
    if(!root) return 0;
    const lsb = f(root.left)+root.val;
    const rsb = f(root.right)+root.val;

    ans = Math.max(ans, lsb, rsb, lsb + rsb - root.val, root.val);

    return Math.max(lsb, rsb, root.val)
}

var maxPathSum = function (root) {
    ans = Number.MIN_SAFE_INTEGER;
    f(root);
    return ans;
};