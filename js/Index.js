import DragDrop from './DragDrop.js';
import SearchBar from './SearchBar.js';
import UploadImageFile from './UploadImageFile.js';

export default class Index {
    constructor() {
        this.uploadedSec = document.querySelector('#uploaded-section');

        const dragDrop = new DragDrop(this.uploadedSec);
        const searchBar = new SearchBar(this.uploadedSec);
        const uploadImageFile = new UploadImageFile(this.uploadedSec);
    }
}

window.onload = () => {
    const index = new Index();
};
