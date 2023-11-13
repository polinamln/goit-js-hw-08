import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const list = document.querySelector(".gallery");

createMarcup(galleryItems);

function createMarcup(items) {
    const htmlArr = items.map(item =>
`<li class="gallery__item">
   <a class="gallery__link" href="${item.original}" data-caption="${item.description}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
    );

    list.insertAdjacentHTML('beforeend', htmlArr.join(''));
};

    const gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition:'bottom'
    });
