import ImageUploader from './ImageLoader.js';

export default class UploadImageFile {
    constructor(uploadedSec) {
        this.uploadBtn = document.querySelector('#upload-btn');
        this.imageInput = document.querySelector('#image-input');
        this.uploadedSec = uploadedSec;

        this.addEventListeners();
    }

    addEventListeners() {
        this.uploadBtn.addEventListener('click', () => this.imageInput.click());
        this.imageInput.addEventListener('change', () => {
            this.imageInputChangedHandler();
        });
    }

    imageInputChangedHandler() {
        let content = undefined;

        if (this.imageInput.files.length > 0) {
            [...this.imageInput.files].forEach(async (file) => {
                content = await ImageUploader.createContentContainer(file);
                this.uploadedSec?.appendChild(content);
            });
        }
    }
}
