let moves;
function f(root) {
    if(!root) return 0;
    let left = f(root.left);
    let right = f(root.right);
    moves += Math.abs(left) + Math.abs(right);
    return root.val + left + right - 1;
}

var distributeCoins = function (root) {
    moves = 0;
    f(root);
    return moves;
};