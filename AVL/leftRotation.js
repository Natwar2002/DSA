function leftRotate(root) {
    // Let the right child of the node be 'rightChild'
    let rightChild = root.right;

    // Store the left subtree of 'rightChild'
    let T2 = rightChild.left;

    // Perform rotation
    rightChild.left = root;
    root.right = T2;

    // Update heights of the node and the new root
    root.height = Math.max(root.left.height, root.right.height) + 1;
    rightChild.height = max(rightChild.left.height, rightChild.right.height) + 1;

    // Return the new root
    return rightChild;
}