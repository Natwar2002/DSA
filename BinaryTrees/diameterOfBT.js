let diameter;
function f (root) {
    if(!root) return 0;
    let lst = f(root.left);
    let rst = f(root.right);

    diameter = Math.max(diameter, lst + rst);

    return 1 + Math.max(lst, rst);
}

var diameterOfBinaryTree = function (root) {
    diameter = -1;
    f(root)
    return diameter; 
};