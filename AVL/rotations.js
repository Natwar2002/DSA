// Used when BST is right heavy
function leftRotate (root) {
    let rightChild = root.right;
    let leftOfRight = rightChild.left;

    rightChild.left = root;
    root.right = leftOfRight;

    // height calc


    return rightChild;
}

// Used when BST is left heavy
function rightRotate (root) {
    let leftChild = root.left;
    rightOfLeft = leftChild.right;

    leftChild.right = root;
    root.left = rightOfLeft;

    // height calc


    return leftChild;
}

// Used when BST is right heavy
function rightLeftRotate (root) {
    root.right = rightRotate(root.right);
    return leftRotate(root);
}

// Used when BST is left heavy
function leftRightRotate (root) {
    root.left = leftRotate(root.left);
    return rightRotate(root);
}