import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

//Селектор галереї
const galleryEl = document.querySelector(".gallery");

// Додаю розмітку через JS до HTML
function addGalleryMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => 
`
        <div class="gallery__item">
      <a class="gallery__link" 
      href="${original}">
        <img class="gallery__image" 
        src="${preview}"
         data-source="${original}"
         alt="${description}" />
      </a>
    </div>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML('beforeend', addGalleryMarkup(galleryItems));
galleryEl.addEventListener("click", onImgClick);

// Клік повинен ловитися тільки на IMG
function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
 
    // Додаю модалку через метод .create (з документації)
    const instance = basicLightbox.create(
        `<img width = "1400" height = "900" src = "${event.target.dataset.source}">`
    );
    instance.show();
}



