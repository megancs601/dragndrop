export default class ImageUploader {
    static createContentContainer(file, src = '') {
        const list = document.createElement('ul');
        const item = document.createElement('li');
        item.classList.add('item', 'shadow');

        const img = ImageUploader.createImage(file, src);

        const imgName = document.createElement('p');
        imgName.innerText = file ? file.name : src;

        const nameContainer = document.createElement('div');
        nameContainer.appendChild(imgName);

        item.appendChild(img);
        item.appendChild(nameContainer);
        list.appendChild(item);

        return list;
    }

    static createImage(file, src) {
        const img = document.createElement('img');
        img.crossOrigin = 'anonymous ';
        img.src = file ? URL.createObjectURL(file) : src;

        return img;
    }
}
