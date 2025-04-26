import ImageUploader from './ImageLoader.js';

export default class DragDrop {
    constructor(uploadedSec) {
        this.dropZone = document.querySelector('#drop-inner-zone');
        this.searchZone = document.querySelector('#search-zone');
        this.uploadedSec = uploadedSec;

        // dragging files over the drag area sometimes emits the drag leave event
        // this counter helps with adding and removing the appropriate class names
        // during the drag start and drag leave events instead.
        this.counter = 0;

        this.addEventListeners();
    }

    addEventListeners() {
        this.dropZone?.addEventListener('drop', (e) => this.dropHandler(e));
        this.dropZone?.addEventListener('dragover', (e) => e.preventDefault());

        this.dropZone?.addEventListener('dragenter', (e) => {
            this.dragEnterHandler(e);
        });

        this.dropZone?.addEventListener('dragleave', () =>
            this.dragLeaveHandler()
        );
    }

    dropHandler(e) {
        e.preventDefault();

        const items = [...e.dataTransfer.items];
        items.forEach(async (item) => {
            //check that it is a file and not a directory
            if (item.kind === 'file' && item.type != '') {
                const file = item.getAsFile();
                const content = await ImageUploader.createContentContainer(
                    file
                );
                this.uploadedSec?.appendChild(content);
            }
        });

        this.dropZone.classList.remove('hover');
        this.searchZone.classList.remove('hide');
    }

    dragEnterHandler(e) {
        e.preventDefault();

        this.counter++;

        this.dropZone.classList.add('hover');
        this.searchZone.classList.add('hide');
    }

    dragLeaveHandler() {
        this.counter--;

        if (this.counter === 0) {
            this.dropZone.classList.remove('hover');
            this.searchZone.classList.remove('hide');
        }
    }
}
