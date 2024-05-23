let mpTrue, mpFalse;

function f (root, isRobbed) {
    if(root == null) return 0;

    if(isRobbed && mpTrue.get(root)) return mpTrue.get(root);
    if(!isRobbed && mpFalse.get(root)) return mpFalse.get(root);
    
}

var rob = function (root) {
    mpTrue = new Map();
    mpFalse = new Map();
    return f(root, false);
}