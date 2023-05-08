import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="small-image.jpg" alt="Image description" />
  </a>
</li>; */

const ulElem = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  const liElem = document.createElement("li");
  liElem.classList.add("gallery__item");

  const aElem = document.createElement("a");
  aElem.classList.add("gallery__link");
  aElem.setAttribute("href", galleryItem.original);

  const imgElem = document.createElement("img");
  imgElem.classList.add("gallery__image");
  imgElem.setAttribute("src", galleryItem.preview);
  //   imgElem.setAttribute("data-source", galleryItem.original);
  imgElem.setAttribute("alt", galleryItem.description);

  liElem.appendChild(aElem);
  aElem.appendChild(imgElem);
  ulElem.appendChild(liElem);
});

const gallery = new SimpleLightbox(".gallery__link", {
  animationSpeed: 250,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
