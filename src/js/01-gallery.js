import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const ul =document.querySelector(`.gallery`);

const crEl = galleryItems.map(galleryItem => 
  `<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`
  
  ).join(" ");
  ul.insertAdjacentHTML('afterbegin', crEl);

  const lightbox = new SimpleLightbox('.gallery a', { 
      
  });
  lightbox.options.captionsData =`alt`;
  lightbox.options.captionDelay =250;
