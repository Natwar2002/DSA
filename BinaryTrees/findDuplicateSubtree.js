let res, mp;

function f (root) {
    if(!root) return '#';

    const left = f(root.left);
    const right = f(root.right);

    let s = "" + root.val + "," + left + "," + right;
    if(mp[s]) {
        if(mp[s] == 1) {
            res.push(root);
        }
        mp[s] += 1;
    } else {
        mp[s] = 1;
    }
    return s;
}

var findDuplicateSubtrees = function (root) {
    mp = {};
    res = [];
    f(root);
    return res;
}