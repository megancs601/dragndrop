import ImageUploader from './ImageLoader.js';

export default class DragDrop {
    constructor() {
        this.dropZone = document.querySelector('#drop-zone');
        this.uploadedSec = document.querySelector('#uploaded-section');

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
        console.log('File(s) dropped');

        const items = [...e.dataTransfer.items];
        items.forEach((item) => {
            //check that it is a file and not a directory
            if (item.kind === 'file' && item.type != '') {
                const file = item.getAsFile();
                console.log(` ${file.name}`);
                const content = ImageUploader.createContentContainer(file);
                this.uploadedSec?.appendChild(content);
            }
        });

        this.dropZone.classList.remove('hover');
    }

    dragOverHandler(e) {
        e.preventDefault();
        console.log('File(s) in drop zone');
        this.dropZone.classList.add('hover');
    }

    dragLeaveHandler() {
        this.dropZone.classList.remove('hover');
    }
}
