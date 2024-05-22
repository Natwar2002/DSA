let sum;
var f = function (root, num) {
    if(!root) return null;

    let n = 10 * num + root.val;
    if(root.left == null && root.right == null) sum += n;
    f(root.left, n);
    f(root.right, n);
};

var sumNumbers = function (root) {
    sum = 0;
    f(root, 0);
    return sum;
};