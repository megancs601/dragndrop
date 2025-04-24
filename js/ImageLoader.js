export default class ImageUploader {
    static createContentContainer(file) {
        const list = document.createElement('ul');
        const item = document.createElement('li');
        item.classList.add('item', 'shadow');

        const img = ImageUploader.createImage(file);

        const fileName = document.createElement('p');
        fileName.innerText = file.name;

        item.appendChild(img);
        item.appendChild(fileName);
        list.appendChild(item);

        return list;
    }

    static createImage(file) {
        const img = document.createElement('img');
        img.crossOrigin = 'anonymous ';

        img.src = URL.createObjectURL(file);

        return img;
    }
}
