import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryNode = document.querySelector(".gallery");

function addImageCard({ description, preview, original } = {}) {
  galleryNode.innerHTML += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}

galleryItems.forEach((item) => addImageCard(item));

galleryNode.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
    event.preventDefault();
    basicLightbox.create(`<img src="${event.target.dataset.source}">`).show();
  }
});
