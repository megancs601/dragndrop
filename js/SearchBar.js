import ImageUploader from './ImageLoader.js';

export default class SearchBar {
    constructor(uploadedSec) {
        this.textInput = document.querySelector('#text-input');
        this.searchBtn = document.querySelector('#search-btn');
        this.uploadedSec = uploadedSec;
        this.addEventListeners();
    }

    addEventListeners() {
        this.searchBtn.addEventListener('click', () =>
            this.searchBtnClickedHandler()
        );
    }

    // TODO: validate img url.
    // RESEARCH: Cheerio or other HTML parsers
    // NOTE: best done using a search engine other than google
    searchBtnClickedHandler() {
        if (this.textInput.value.trim().length) {
            const content = ImageUploader.createContentContainer(
                undefined,
                this.textInput.value
            );
            this.uploadedSec?.appendChild(content);
            this.textInput.value = '';
        }
    }
}
