class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    // The insert function creates a new node and inserts it into the binary search tree.
    // If the tree is empty, the new node becomes the root.
    // Otherwise, the function traverses the tree to find the correct position for the new node, 
    // comparing values and moving left or right accordingly.
    insert(value) {
        const newNode = new TreeNode(value);
        // If the tree is empty (i.e., this.root is null), the new node becomes the root of the tree.
        if (!this.root) {
            this.root = newNode;
            return;
        }
        // A variable current is initialized to the root of the tree to start the traversal.
        let current = this.root;
        
        // A while loop is used to traverse the tree until the correct position for the new node is found.
        while (true) {
            // If the value to be inserted is less than the current node's value, 
            // the function checks the left subtree.
            if (value < current.value) {
                // If the left child of the current node is null, the new node is inserted there.
                // If the left child is not null, the function moves to the left child and continues the loop.
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            // If the value to be inserted is greater than or equal to the current node's value, 
            // the function checks the right subtree.
            else {
                // If the right child of the current node is null, the new node is inserted there.
                // If the right child is not null, the function moves to the right child and continues the loop.
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    // This function takes a single parameter value which is the value to be searched in the binary search tree.
    find(value) {
        // A variable current is initialized to the root of the tree to start the search.
        let current = this.root;
        // A while loop is used to traverse the tree as long as the current node is not null.
        while (current) {
            // If the value to be found matches the current node's value, the function returns true, 
            // indicating that the value is found in the tree.
            if (value === current.value) return true;
            // If the value to be found is less than the current node's value, the function moves to the left child.
            // If the value to be found is greater than or equal to the current node's value, the function moves 
            // to the right child.
            current = value < current.value ? current.left : current.right;
        }
        // If the loop exits (i.e., current becomes null), the function returns false, indicating that the value 
        // is not found in the tree.
        return false;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.find(10)); 
console.log(bst.find(7)); 