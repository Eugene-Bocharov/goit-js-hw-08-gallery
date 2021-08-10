import galleryItems from "./app.js";

// console.log(galleryItems);

const galleryplace = {
  ul: document.querySelector(".gallery"),
};

// console.log(galleryplace.ul);

function addig_function(galleryItems) {
  galleryItems.forEach((galleryItem) => {
    // adding items of gallery

    const li = document.createElement("li");
    li.className = "gallery__item";
    const img = document.createElement("img");
    img.src = galleryItem.preview;
    img.className = "gallery__image";
    img.alt = galleryItem.description;
    const big_img = document.createElement("a");
    big_img.className = "gallery__link";
    // big_img.href = galleryItem.original;
    big_img.appendChild(img);
    li.appendChild(big_img);
    // console.log(li);
    galleryplace.ul.appendChild(li);

    //  adding additional variables

    const lightbox = document.querySelector(".lightbox");
    const overlay = document.querySelector(".lightbox__overlay");
    const close_button = document.querySelector(".lightbox__button");

    // open modal part

    img.addEventListener("click", (event) => {
      img.src = galleryItem.original;
      //   img.classList.add("lightbox__image");
      img.classList.replace("gallery__image", "lightbox__image");
      lightbox.classList.replace("lightbox", "lightbox.is-open");
    });

    // closing modal

    close_button.addEventListener("click", (event) => {
      close_lightbox();
    });

    overlay.addEventListener("click", (event) => {
      close_lightbox();
    });


    document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
            close_lightbox()
        }
    });

    function close_lightbox() {
      img.src = galleryItem.preview;
      img.classList.replace("lightbox__image", "gallery__image");
      lightbox.classList.replace("lightbox.is-open", "lightbox");
    }
  });
}


addig_function(galleryItems);
