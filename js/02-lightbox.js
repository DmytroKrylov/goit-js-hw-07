import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
</li>; */

const ulElem = document.querySelector(".gallery");

const galleryHtml = galleryItems
  .map(
    (galleryItem) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}">
    </a>
  </li>
`
  )
  .join("");

ulElem.insertAdjacentHTML("beforeend", galleryHtml);

const gallery = new SimpleLightbox(".gallery__link", {
  animationSpeed: 250,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
