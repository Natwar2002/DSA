let mpTrue, mpFalse;

function f (root, isRobbed) {
    if(root == null) return 0;

    if(isRobbed && mpTrue.get(root)) return mpTrue.get(root);
    if(!isRobbed && mpFalse.get(root)) return mpFalse.get(root);

    if(!isRobbed) {
        const leave = f(root.left, false) + f(root.right, false);
        const take = root.val + f(root.left, true) + f(root.right, true);
        const ans = Math.max(leave, take);
        mpFalse.set(root, ans);
        return ans;
    } else {
        const leave = f(root.left, false) + f(root.right, false);
        const ans = leave;
        mpTrue.set(root, ans);
        return ans;
    }
}

var rob = function (root) {
    mpTrue = new Map();
    mpFalse = new Map();
    return f(root, false);
}