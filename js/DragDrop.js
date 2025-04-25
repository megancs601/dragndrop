import ImageUploader from './ImageLoader.js';

export default class DragDrop {
    constructor(uploadedSec) {
        this.dropZone = document.querySelector('#drop-inner-zone');
        this.searchZone = document.querySelector('#search-zone');
        this.uploadedSec = uploadedSec;

        this.addEventListeners();
    }

    addEventListeners() {
        this.dropZone?.addEventListener('drop', (e) => this.dropHandler(e));
        this.dropZone?.addEventListener('dragover', (e) =>
            this.dragOverHandler(e)
        );
        this.dropZone?.addEventListener('dragleave', () =>
            this.dragLeaveHandler()
        );
    }

    dropHandler(e) {
        e.preventDefault();
        const items = [...e.dataTransfer.items];
        items.forEach((item) => {
            //check that it is a file and not a directory
            if (item.kind === 'file' && item.type != '') {
                const file = item.getAsFile();
                const content = ImageUploader.createContentContainer(file);
                this.uploadedSec?.appendChild(content);
            }
        });

        this.dropZone.classList.remove('hover');
        this.searchZone.classList.remove('hide');
    }

    // TODO: fix flashing issue when hovering file over search zone
    dragOverHandler(e) {
        e.preventDefault();
        this.dropZone.classList.add('hover');
        this.searchZone.classList.add('hide');
    }

    dragLeaveHandler() {
        this.dropZone.classList.remove('hover');
        this.searchZone.classList.remove('hide');
    }
}
