import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryNode = document.querySelector(".gallery");

function addImageCard({ description, preview, original } = {}) {
  galleryNode.innerHTML += `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

galleryItems.forEach((item) => addImageCard(item));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
