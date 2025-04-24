import DragDrop from './DragDrop.js';
import SearchBar from './SearchBar.js';

export default class Index {
    constructor() {
        const dragDrop = new DragDrop();
        const searchBar = new SearchBar();
    }
}

window.onload = () => {
    const index = new Index();
};
