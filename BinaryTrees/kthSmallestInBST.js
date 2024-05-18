let res, ans, x;
var f = function (root) {
    if(root == null) return;
    f(root.left);

    ans = root.val;
    x--;
    if(x == 0) {
        res = ans;
    }

    f(root.right);
}

var kthSmallest = function (root, k) {
    x = k;
    f(root);
    return res;
}