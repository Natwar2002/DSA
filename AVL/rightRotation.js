function rightRotation (root) {
    let leftChild = root.left;
    let T2 = leftChild.right;

    leftChild.right = node;
    node.left = T2;


    return leftChild;
}