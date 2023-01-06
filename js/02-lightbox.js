import { galleryItems } from './gallery-items.js';
// Change code below this line


//Селектор галереї
const galleryEl = document.querySelector(".gallery");

//Створюю функцію розмітки галереї в HTML
function addGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => 

    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
         alt="${description}" />
      </a>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML('beforeend', addGalleryMarkup(galleryItems));
galleryEl.addEventListener("click", onImgClick);

function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    // Додаю розмітку модального вікна в код HTML
    const instance = basicLightbox.create(
        `<img width = "1400" height = "900" src = "${event.target.dataset.source}">`
    );
    instance.show();
}

// Додаю відображення підписів до зображень: з атрибута alt + з інтервалом 250 мілісекунд.
const test = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
})



