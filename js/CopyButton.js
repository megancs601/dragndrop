export default class CopyButton {
    constructor(textToCopy) {
        this.textToCopy = textToCopy;
    }

    async create() {
        const copyBtn = document.createElement('button');
        copyBtn.id = 'copy-button';

        copyBtn.addEventListener('click', () => {
            this.onClickHandler();
        });

        const res = await fetch('./media/copy-regular.svg');
        const svgText = await res.text();

        const parser = new DOMParser();
        const svgDOM = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = svgDOM.documentElement;
        svgElement.id = 'copy-icon';
        svgElement.alt = 'copy image url';

        copyBtn.appendChild(svgElement);

        return copyBtn;
    }

    async onClickHandler() {
        const clipboardItemData = {
            ['text/plain']: this.textToCopy,
        };

        const clipboardItem = new ClipboardItem(clipboardItemData);
        await navigator.clipboard.write([clipboardItem]);
    }
}
