import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
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
  imgElem.setAttribute("data-source", galleryItem.original);
  imgElem.setAttribute("alt", galleryItem.description);

  liElem.appendChild(aElem);
  aElem.appendChild(imgElem);
  ulElem.appendChild(liElem);
});

ulElem.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();
  console.log(e.target.getAttribute("data-source"));

  const instance = basicLightbox.create(`
    <img src='${e.target.getAttribute(
      "data-source"
    )}' width="800" height="600">`);
  instance.show();

  ulElem.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
});
