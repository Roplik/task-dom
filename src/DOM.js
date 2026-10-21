export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const el = document.createElement(tag);
        el.textContent = content;
        document.body.appendChild(el);
    }
}

export function generateTree(childrenCount, level) {
    function createNode(depth) {
        const div = document.createElement('div');
        div.className = `item_${depth}`;
        if (depth < level) {
            for (let i = 0; i < childrenCount; i++) {
                div.appendChild(createNode(depth + 1));
            }
        }
        return div;
    }
    return createNode(1);
}

export function replaceNodes() {
    const tree = generateTree(2, 3);

    function walk(node) {
        const children = Array.from(node.children);
        for (const child of children) {
            if (child.classList.contains('item_2')) {
                const section = document.createElement('section');
                section.className = 'item_2';
                while (child.firstChild) {
                    section.appendChild(child.firstChild);
                }
                node.replaceChild(section, child);
            } else {
                walk(child);
            }
        }
    }

    walk(tree);
    return tree;
}
