let ans;
function f(root) {
    if(root == null) return 0;
    
}

var isBalanced = function (root) {
    ans = true;
    f(root);
    return ans;
};