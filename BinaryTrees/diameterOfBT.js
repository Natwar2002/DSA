let ans = -1;
function f (root) {
    if(!root) return 0;
    let lst = f(root.left);
    let rst = f(root.right);

    ans = Math.max(ans, lst + rst + 1);

    return 1 + Math.max(lst, rst);
}

var diameterOfBT = function (root) {
    f(root)
    return ans - 1; 
};