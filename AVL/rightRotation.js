function rightRotation (root) {
    let leftChild = root.left;
    let T2 = leftChild.right;

    leftChild.right = root;
    root.left = T2;

    return leftChild;
}