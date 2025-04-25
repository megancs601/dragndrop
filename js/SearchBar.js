import ImageUploader from './ImageLoader.js';

export default class SearchBar {
    constructor() {
        this.textInput = document.querySelector('#text-input');
        this.searchBtn = document.querySelector('#search-btn');
        this.uploadedSec = document.querySelector('#uploaded-section');

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
        console.log(this.textInput.value);
        const content = ImageUploader.createContentContainer(
            undefined,
            this.textInput.value
        );
        this.uploadedSec?.appendChild(content);
        this.textInput.value = '';
    }
}
