import ImageUploader from './ImageLoader.js';

export default class SearchBar {
    constructor(uploadedSec) {
        this.textInput = document.querySelector('#text-input');
        this.searchBtn = document.querySelector('#search-btn');
        this.errorMessage = document.querySelector('#error-message');
        this.uploadedSec = uploadedSec;
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
                const content = ImageUploader.createContentContainer(
                    undefined,
                    this.textInput.value
                );
                this.uploadedSec?.appendChild(content);
            } else {
                this.errorMessage.innerText =
                    'Sorry, image could not be uploaded';
            }
        }

        this.textInput.value = '';
    }

    async isValidImage() {
        try {
            const response = await fetch(this.textInput.value.trim());
            if (!response.ok) {
                console.log('unsuccessful request');
                return false;
            }

            const buff = await response.blob();
            if (buff.type.startsWith('image/')) {
                return true;
            }

            console.log('url is not of type image');
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
