import ImageUploader from './ImageLoader.js';

export default class SearchBar {
    constructor(uploadedSec) {
        this.textInput = document.querySelector('#text-input');
        this.searchBtn = document.querySelector('#search-btn');
        this.errorMessage = document.querySelector('#error-message');
        this.uploadedSec = uploadedSec;
        this.error = '';

        this.addEventListeners();
    }

    addEventListeners() {
        this.searchBtn.addEventListener('click', () =>
            this.searchBtnClickedHandler()
        );
    }

    // NOTE: image urls best copied from a search engine other than google
    async searchBtnClickedHandler() {
        this.errorMessage.innerText = '';

        if (this.textInput.value.trim().length) {
            const validImage = await this.isValidImage();

            if (validImage) {
                this.addImage();
            } else {
                this.errorMessage.innerText = this.error;
            }
        }

        this.textInput.value = '';
    }

    async isValidImage() {
        try {
            const response = await fetch(this.textInput.value.trim());
            if (!response.ok) {
                this.error = 'Sorry, there was an unsuccessful request.';
                return false;
            }

            const buff = await response.blob();
            if (buff.type.startsWith('image/')) {
                this.error = '';
                return true;
            }

            this.error = 'Sorry, url provided is not an image.';

            return false;
        } catch (error) {
            console.log(error);
            this.error = 'Sorry, image could not be uploaded.';

            return false;
        }
    }

    async addImage() {
        const content = await ImageUploader.createContentContainer(
            undefined,
            this.textInput.value
        );

        this.uploadedSec?.appendChild(content);
    }
}
