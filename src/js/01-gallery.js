// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const ul =document.querySelector(`.gallery`);

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(lightbox);
const crEl = galleryItems.map(galleryItem => 
    `<a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>`
    
    ).join(" ");
    ul.insertAdjacentHTML('afterbegin', crEl);