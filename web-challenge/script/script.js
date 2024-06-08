// document.addEventListener("DOMContentLoaded", function() {
//    const galleryItems = document.querySelectorAll('.gallery-item');

//    galleryItems.forEach(item => {
//        item.addEventListener('mouseover', () => {
//            item.style.filter = 'brightness(0%)';
//        });

//        item.addEventListener('mouseout', () => {
//            item.style.filter = 'brightness(100%)';
//        });
//    });
// });


// Get the container element
var container = document.querySelector('.container');

// Create a new div for the filtered background
var filteredBackground = document.createElement('div');
filteredBackground.classList.add('filtered-item');

// Set the background image and apply CSS filters
filteredBackground.style.backgroundImage = "url('../assets/Fox.png')";
filteredBackground.style.filter = "grayscale(100%) blur(5px) hue-rotate(180deg) saturate(150%) brightness(120%) contrast(90%)";

// Append the filtered background to the container
container.appendChild(filteredBackground);
