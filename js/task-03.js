const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//W HTML znajduje się lista ul.gallery
//Przy pomocy tablicy obiektów const images 
//stworzyć elementy <img> wewątrz <li>
//Utwożyć znacznik przy pomocy łancuchów szablonowych
//Wszystkie elementy powinny być dodane do DOM w jednej operacji
//Ulepszyć galerie używając flexboxsów lub gridów za pomocą klas css
//łącze za pomocą metody .join
//używam "afterbegin" aby umieścić wewnątrz elementu przed (wszystkimi dziecmi)
 
const gallery = document.querySelector('.gallery');

const createGallery = images => {
  const galleryItems = images.map(image => 

  `<li class="item"><img class="picture" src="${image.url}" alt="${image.alt}"/></li>`,
  );
    gallery.insertAdjacentHTML('afterbegin', galleryItems.join(''));
  };
createGallery(images);













 