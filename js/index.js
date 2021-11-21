import galleryItems from "./app.js";

//  adding additional variables

const ul = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".lightbox__overlay");
const close_button = document.querySelector(".lightbox__button");

function addig_func(galleryItems) {
  galleryItems.forEach((galleryItem) => {
    // adding items of gallery
    creating_func(galleryItem);
  });
}

function creating_func(galleryItem) {
  const li = document.createElement("li");
  li.className = "gallery__item";
  const img = document.createElement("img");

  img.setAttribute("data-preview", galleryItem.preview);
  img.setAttribute("data-original", galleryItem.original);

  img.src = galleryItem.preview;
  img.className = "gallery__image";
  img.alt = galleryItem.description;
  const big_img = document.createElement("a");
  big_img.className = "gallery__link";
  big_img.appendChild(img);
  li.appendChild(big_img);
  ul.appendChild(li);
}

ul.addEventListener("click", (event) => {
  const origin = event.target.getAttribute("data-original");
  event.target.src = origin;

  const item = event.target;

  event.target.classList.add("lightbox__image");
  event.target.classList.replace("gallery__image", "lightbox__image");
  lightbox.classList.replace("lightbox", "lightbox.is-open");

  close_modal(item);
});

addig_func(galleryItems);

function close_modal(item) {
  // closing modal

  close_button.addEventListener("click", (event) => {
    close_lightbox(item);
  });

  overlay.addEventListener("click", (event) => {
    close_lightbox(item);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      close_lightbox(item);
    }
  });

  function close_lightbox() {
    const preview = item.getAttribute("data-preview");
    item.src = preview;
    item.classList.replace("lightbox__image", "gallery__image");
    lightbox.classList.replace("lightbox.is-open", "lightbox");
  }
}
