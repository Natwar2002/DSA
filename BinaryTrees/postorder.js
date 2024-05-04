let res;
var postorder = function(root) {
    if(!root) return null;

    postorder(root.left);
    postorder(root.right);
    res.push(root.val);
};

var postorderTravel = function (root) {
    res = [];
    postorder(root);
    return res;
};