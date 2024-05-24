var f = function (root) {
    if(root == null) return "";
    
    let left = f(root.left);
    let right = f(root.right);

    if(left == "" && right == "") {
        return `${root.val}`;
    } else if(left == "") {
        return `${root.val}()(${right})`;
    } else if(right = "") {
        return `${root.val}(${left})`;
    } else {
        return `${root.val}(${left})(${right})`;
    }
};

var tree2str = function (root) {
    return f(root);
}